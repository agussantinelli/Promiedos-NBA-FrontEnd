---
name: svelte5
description: Reglas obligatorias para el diseño de componentes Svelte 5 y arquitectura de páginas SvelteKit en Promiedos-NBA.
---

# ⚡ Promiedos-NBA — Svelte 5 & SvelteKit

Directrices para construir la UI de Promiedos-NBA con Svelte 5 y SvelteKit.

## 🟠 Svelte 5 — Componentes

1. **Runes**: Usa la sintaxis de runes de Svelte 5 para la reactividad:
   - `$state()` para estado local.
   - `$derived()` para valores derivados (en lugar de `$:` reactivo).
   - `$effect()` para efectos secundarios.
   - `$props()` para declarar las props del componente.
2. **Sin lógica en plantillas**: Mantené la lógica en `<script>`, no inline en el HTML.
3. **Tipado**: Siempre usá TypeScript (`<script lang="ts">`).

## 📂 SvelteKit — Estructura de Rutas

1. **File-based routing**: Cada página vive en `src/routes/[ruta]/+page.svelte`.
2. **Load functions**: Los datos se obtienen en `+page.ts` (o `+page.server.ts`) usando la función `load`. **Nunca** hagas fetch directamente en el `onMount` de un componente de página.
3. **Layouts**: Los layouts compartidos van en `+layout.svelte`. Usá el layout raíz para Navbar y Footer.
4. **Error pages**: Definí `+error.svelte` para manejar errores 404/500 con UX consistente.

## 📂 Estructura de Archivos

```
src/
├── lib/
│   ├── components/     # Componentes reutilizables (átomos y organismos)
│   ├── services/       # Funciones fetch hacia la API Fastify
│   ├── types/          # Interfaces TypeScript compartidas
│   └── utils/          # Helpers de formateo (fechas, stats, etc.)
└── routes/             # Páginas SvelteKit (file-based)
```

## 🎨 Estilos

1. Usá `<style>` scoped dentro de cada componente `.svelte` para estilos locales.
2. Los estilos globales (variables CSS, reset, tipografía) van en `src/app.css`.
3. No usés frameworks CSS externos (Tailwind, Bootstrap) a menos que se acuerde explícitamente.
