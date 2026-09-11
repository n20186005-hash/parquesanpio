# Parque San Pío · Bucaramanga

Micrositio editorial de una sola página, en español de Colombia, diseñado específicamente alrededor de tres rasgos del Parque San Pío: vegetación urbana, senderos de ladrillo y arte público.

## Stack fijado

- Astro `7.3.2`
- `@astrojs/check` `0.9.10`
- `@astrojs/sitemap` `3.7.4`
- Tailwind CSS `4.3.3`
- `@tailwindcss/vite` `4.3.3`
- TypeScript `6.0.3` (se evita TypeScript 7 para mantener compatibilidad con la cadena actual de Astro Check)
- Wrangler `4.130.0`
- pnpm `12.4.0`
- Node.js LTS `24.21.0`

No hay base de datos, login ni CMS.

## Dominio: una sola configuración

Edita únicamente esta línea en `astro.config.ts`:

```ts
const site = '';
```

Ejemplo cuando ya tengas dominio (sustituye por el real):

```ts
const site = 'https://tu-dominio-real.tld';
```

Mientras `site` esté vacío:

- el build sigue funcionando;
- no se emite canonical absoluto ni `og:url`;
- la URL del JSON-LD se omite;
- `@astrojs/sitemap` no se activa.

Cuando `site` tenga un dominio real, canonical, Open Graph, JSON-LD, OG image y sitemap se derivan de `Astro.site`. No hay dominio de producción duplicado en otras partes del proyecto.

## Cloudflare Workers

El proyecto es totalmente estático. Se despliega con Cloudflare Workers Static Assets mediante `wrangler deploy`, sin añadir SSR innecesario. `wrangler.jsonc` apunta a `./dist`.

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm check
pnpm build
pnpm deploy
```

## Fotos

El sitio usa fotografías reales. Este entorno no permitió descargar binarios externos, por eso las fotos se conservan como URLs de origen con atribución en `PHOTO-SOURCES.md`. Logo, favicon y OG artwork sí son archivos locales incluidos en el proyecto.

## GA4

ID configurado: `G-HXM22WWPKP`.

## Mapa

El iframe de Google Maps usa español latino (`es-419`) y región Colombia (`co`) en lugar del locale chino del fragmento original.

## Comprobaciones de contenido

No se incluyen dominios de ejemplo, `localhost`, `chrome-extension://`, scripts de extensiones ni `lastmod` inventados. El sitemap solo se genera cuando `site` es real.
