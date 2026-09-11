# Estado de validación

## Comprobaciones realizadas en este entorno

- `package.json` parseado y versiones exactas verificadas: **PASS**.
- Node fijado en `.node-version` y `engines`: **PASS**.
- No existe `pnpm-workspace.yaml`: **PASS**.
- `site` vacío y sitemap condicional en `astro.config.ts`: **PASS (inspección estática)**.
- GA4 `G-HXM22WWPKP`: **PASS (inspección estática)**.
- Google Maps cambiado a `es-419` / `co`: **PASS (inspección estática)**.
- JSON-LD de `TouristAttraction`, `AggregateRating`, horarios y `FAQPage`: **PASS (inspección estática)**.
- `src/pages/index.astro` no contiene `example.com`, `localhost` ni `chrome-extension://`: **PASS**.
- Logo / favicon SVG parsean como XML y PNG 16/32/180 existen: **PASS**.

## Bloqueo del control obligatorio de dependencias

Se intentó exactamente el flujo limpio solicitado empezando por:

```bash
rm -rf node_modules dist .astro
CI=1 corepack pnpm install --frozen-lockfile
```

La ejecución se detuvo antes de poder instalar pnpm porque este contenedor no tiene resolución DNS / salida hacia `registry.npmjs.org` (`getaddrinfo EAI_AGAIN`). El log completo está en `validation-install.log`.

Por esa misma limitación no es posible afirmar que `pnpm check` y `pnpm build` hayan pasado aquí. Tampoco se puede generar de forma honesta el grafo completo de `pnpm-lock.yaml` desde el registro. El `pnpm-lock.yaml` incluido documenta las resoluciones directas previstas, pero está marcado dentro del propio archivo como **no validado** y no debe presentarse como un lockfile frozen terminado.

Este paquete se entrega, por tanto, como **fuente revisable / no como build final validado**. Para convertirlo en entrega final, debe generarse el lockfile completo en un entorno con acceso a npm y repetirse el flujo solicitado hasta que install/check/build sean verdes.
