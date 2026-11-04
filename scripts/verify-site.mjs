/**
 * Build-output acceptance check for parquesanpio.com.
 * Run after `astro build`:  node scripts/verify-site.mjs
 * Checks generated pages, unique metadata, canonical/hreflang, JSON-LD,
 * internal links, sitemap coverage, and that every published asset survives.
 */
import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const dist = join(root, 'dist');
const publicDir = join(root, 'public');
const failures = [];
const notes = [];

function fail(message) {
  failures.push(message);
}

function walk(dir) {
  const out = [];
  if (!existsSync(dir)) return out;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out;
}

function htmlFor(urlPath) {
  const clean = urlPath.split('#')[0].split('?')[0];
  const rel = clean.replace(/^\/+/, '');
  if (!rel) return join(dist, 'index.html');
  const asFile = join(dist, rel);
  if (existsSync(asFile) && statSync(asFile).isFile()) return asFile;
  return join(dist, rel.replace(/\/+$/, ''), 'index.html');
}

function assetExists(urlPath) {
  const rel = urlPath.replace(/^\/+/, '').replace(/\/+$/, '');
  return existsSync(join(dist, rel));
}

function firstMatch(text, pattern) {
  const match = text.match(pattern);
  return match ? match[1] : null;
}

if (!existsSync(dist)) {
  console.error('dist/ does not exist. Run `astro build` first.');
  process.exit(1);
}

const pageFiles = walk(dist).filter((file) => file.endsWith('/index.html') || file.endsWith(`${sep}index.html`));
const topicPages = pageFiles.filter((file) => {
  const rel = relative(dist, file).replace(/\\/g, '/');
  return rel !== 'index.html' && rel.endsWith('/index.html') && !rel.startsWith('404');
});

// 1. At least 30 net-new topic pages exist.
if (topicPages.length < 30) fail(`Only ${topicPages.length} topic pages generated; need at least 30.`);
notes.push(`Generated topic pages: ${topicPages.length}`);

// 2. Every published asset in public/ survives the build.
const publicFiles = walk(publicDir);
let missingAssets = 0;
for (const file of publicFiles) {
  const rel = relative(publicDir, file);
  if (!assetExists('/' + rel.replace(/\\/g, '/'))) {
    fail(`Published asset missing from dist: ${rel}`);
    missingAssets++;
  }
}
notes.push(`Published assets preserved: ${publicFiles.length - missingAssets}/${publicFiles.length}`);

// 3. Per-page SEO + structured data checks.
const titles = new Set();
const descriptions = new Set();
let canonicalOk = 0;
let hreflangOk = 0;
let schemaOk = 0;
let faqMatched = 0;

for (const file of topicPages) {
  const html = readFileSync(file, 'utf8');
  const slug = relative(dist, file).replace(/\\/g, '/').replace(/\/index\.html$/, '');
  const label = `/${slug}/`;
  const title = firstMatch(html, /<title>([^<]*)<\/title>/);
  const description = firstMatch(html, /<meta name="description" content="([^"]*)"/);
  const canonical = firstMatch(html, /<link rel="canonical" href="([^"]*)"/);

  if (!title) fail(`${label}: missing <title>`);
  else if (titles.has(title)) fail(`${label}: duplicate title "${title}"`);
  else titles.add(title);

  if (!description) fail(`${label}: missing meta description`);
  else if (descriptions.has(description)) fail(`${label}: duplicate description`);
  else descriptions.add(description);

  if (canonical !== `https://parquesanpio.com/${slug}/`) {
    fail(`${label}: canonical is ${canonical}`);
  } else canonicalOk++;

  if (!/hreflang="es-CO" href="https:\/\/parquesanpio\.com\//.test(html) || !/hreflang="x-default"/.test(html)) {
    fail(`${label}: missing es-CO / x-default hreflang`);
  } else hreflangOk++;

  const h1Count = (html.match(/<h1[ >]/g) || []).length;
  if (h1Count !== 1) fail(`${label}: ${h1Count} H1 elements`);
  if ((html.match(/<h2[ >]/g) || []).length < 4) fail(`${label}: fewer than 4 H2 sections`);
  if (!/<html lang="es-CO"/.test(html)) fail(`${label}: wrong html lang`);

  // JSON-LD graph parses and contains the expected node types.
  const ldBlocks = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
    .map((match) => match[1].trim());
  if (ldBlocks.length !== 1) fail(`${label}: ${ldBlocks.length} JSON-LD blocks`);
  const graphs = ldBlocks.flatMap((block) => {
    try {
      const parsed = JSON.parse(block);
      return parsed['@graph'] ? parsed['@graph'] : [parsed];
    } catch {
      fail(`${label}: invalid JSON-LD`);
      return [];
    }
  });
  const types = graphs.flatMap((node) => (Array.isArray(node['@type']) ? node['@type'] : [node['@type']]));
  for (const required of ['TouristAttraction', 'Park', 'Place', 'BreadcrumbList', 'FAQPage']) {
    if (!types.includes(required)) fail(`${label}: missing schema type ${required}`);
  }
  if (!types.includes('WebPage') && !types.includes('Article')) fail(`${label}: missing WebPage/Article`);
  if (/aggregateRating/.test(html)) fail(`${label}: aggregateRating must not be emitted`);
  const faqNode = graphs.find((node) => node['@type'] === 'FAQPage');
  const visibleFaqs = (html.match(/<details>/g) || []).length;
  if (!faqNode || visibleFaqs < 2 || visibleFaqs !== faqNode.mainEntity?.length) {
    fail(`${label}: visible FAQs (${visibleFaqs}) do not match FAQPage (${faqNode?.mainEntity?.length ?? 0})`);
  } else faqMatched++;
  if (!/Última revisión editorial/.test(html)) fail(`${label}: missing review date`);
  if (!/Fuentes y revisión/.test(html)) fail(`${label}: missing sources block`);
  if (!/topic-breadcrumb/.test(html)) fail(`${label}: missing breadcrumb`);
  if (!/Páginas relacionadas/.test(html)) fail(`${label}: missing related links`);
  if (types.length > 0) schemaOk++;
}

notes.push(`Canonical OK: ${canonicalOk}/${topicPages.length}`);
notes.push(`hreflang OK: ${hreflangOk}/${topicPages.length}`);
notes.push(`JSON-LD graphs OK: ${schemaOk}/${topicPages.length}`);
notes.push(`Visible FAQ = FAQPage schema: ${faqMatched}/${topicPages.length}`);

// 4. Internal links resolve to a built page or asset; anchors exist on the target page.
const allHtml = [...pageFiles.map((file) => join(dist, relative(dist, file))), join(dist, '404.html')].filter(existsSync);
let internalLinksChecked = 0;
for (const file of allHtml) {
  const html = readFileSync(file, 'utf8');
  const hrefs = [...html.matchAll(/(?:href|src)="([^"]*)"/g)].map((match) => match[1]);
  for (const href of hrefs) {
    if (!href.startsWith('/') || href.startsWith('//')) continue;
    const [pathPart, hash] = href.split('#');
    const target = htmlFor(pathPart || '/');
    if (!existsSync(target)) {
      fail(`${relative(dist, file)}: dead internal link ${href}`);
      continue;
    }
    if (hash) {
      const targetHtml = readFileSync(target, 'utf8');
      if (!new RegExp(`id="${hash.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"`).test(targetHtml)) {
        fail(`${relative(dist, file)}: missing anchor #${hash} at ${pathPart || '/'}`);
        continue;
      }
    }
    internalLinksChecked++;
  }
}
notes.push(`Internal links/anchors verified: ${internalLinksChecked}`);

// 5. Home links to every generated topic page.
const homeHtml = readFileSync(join(dist, 'index.html'), 'utf8');
let homeLinked = 0;
for (const file of topicPages) {
  const slug = relative(dist, file).replace(/\\/g, '/').replace(/\/index\.html$/, '');
  if (!homeHtml.includes(`href="/${slug}/"`)) fail(`Home does not link to /${slug}/`);
  else homeLinked++;
}
notes.push(`Topic pages linked from home: ${homeLinked}/${topicPages.length}`);

// 6. Sitemap covers home + every topic page and excludes 404.
const sitemapFiles = walk(dist).filter((file) => /sitemap-\d+\.xml$/.test(file));
const sitemapIndex = join(dist, 'sitemap-index.xml');
if (!existsSync(sitemapIndex)) fail('sitemap-index.xml missing');
let sitemapLocs = [];
for (const file of sitemapFiles) {
  const xml = readFileSync(file, 'utf8');
  sitemapLocs.push(...[...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]));
}
for (const file of topicPages) {
  const slug = relative(dist, file).replace(/\\/g, '/').replace(/\/index\.html$/, '');
  const expected = `https://parquesanpio.com/${slug}/`;
  if (!sitemapLocs.includes(expected)) fail(`Sitemap missing ${expected}`);
}
if (!sitemapLocs.includes('https://parquesanpio.com/')) fail('Sitemap missing home');
if (sitemapLocs.some((loc) => /404/.test(loc))) fail('Sitemap includes 404');
notes.push(`Sitemap URLs: ${sitemapLocs.length}`);

// 7. robots.txt is published with an absolute sitemap directive.
const robots = join(dist, 'robots.txt');
if (!existsSync(robots) || !readFileSync(robots, 'utf8').includes('Sitemap: https://parquesanpio.com/sitemap-index.xml')) {
  fail('robots.txt missing sitemap directive');
}

// 8. Existing home sections and images are preserved, and mobile rules survive the CSS build.
if (!homeHtml.includes('id="fotografias"') || !homeHtml.includes('gallery-band')) {
  fail('Home photograph sections were removed');
}
if (!homeHtml.includes('id="guias"')) fail('Home guide cluster missing');
const cssFiles = walk(dist).filter((file) => file.endsWith('.css'));
const cssText = cssFiles.map((file) => readFileSync(file, 'utf8')).join('\n');
// Lightning CSS rewrites `@media (max-width:580px)` to `@media (width<=580px)`.
if (!/max-width:\s*580px|@media \(width<=580px\)/.test(cssText)) {
  fail('Mobile breakpoint missing from built CSS');
}
if (!cssText.includes('min-height:46px') && !cssText.includes('min-height: 46px')) {
  fail('Touch target sizing missing from built CSS');
}
if (!cssText.includes('grid-template-columns:1fr')) {
  fail('Single-column mobile layout missing from built CSS');
}
let viewportOk = 0;
for (const file of [...pageFiles, join(dist, '404.html')].filter(existsSync)) {
  if (/<meta name="viewport" content="width=device-width"/.test(readFileSync(file, 'utf8'))) viewportOk++;
}
notes.push(`Pages with viewport meta: ${viewportOk}`);
if (viewportOk !== pageFiles.length + 1) fail('A page is missing its viewport meta');

for (const note of notes) console.log(`  ${note}`);
if (failures.length) {
  console.error(`\nFAILED with ${failures.length} issue(s):`);
  for (const message of failures.slice(0, 40)) console.error(`  - ${message}`);
  if (failures.length > 40) console.error(`  ... and ${failures.length - 40} more`);
  process.exit(1);
}
console.log('\nPASS: build output meets the acceptance checks.');
