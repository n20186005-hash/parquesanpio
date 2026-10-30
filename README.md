# Parque San Pío, Bucaramanga

Independent nonprofit visitor information and public-education guide, in Spanish. No operator or municipal affiliation. Public sources and dated third-party Maps snapshot appear on the page; private search reports are not published.

## Preserved toolchain

Node 24.21.0, pnpm 12.4.0, Astro 7.3.2, sitemap 3.7.4, Tailwind 4.3.3, TypeScript 6.0.3, Astro check 0.9.10, Wrangler 4.130.0. Exact manifest and lock preserved, including existing esbuild/workerd build allowlist.

Use `pnpm install --frozen-lockfile`, `pnpm run check`, `pnpm run build`, then `pnpm exec wrangler deploy --dry-run` for local preparation. A dry-run is not deployment.

Static Astro architecture remains. A small native ASSETS Worker handles canonical HTTP/www redirects and genuine 404s. Domain in astro.config.ts and canonical Worker host must agree. Wrangler project is parquesanpio, matching the existing Cloudflare project; no new domain bindings.

Photograph removals and original illustration scope are documented in PHOTO-SOURCES.md. GA4 remains automatic; the page discloses actual analytics, map and hosting connections without promising consent controls.
