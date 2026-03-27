---
name: global-skills
description: Catálogo central de skills de diseño y arquitectura frontend para Promiedos-NBA.
---

# 📚 Promiedos-NBA FrontEnd — Skills Catalog

Índice de todas las directrices de diseño y arquitectura del FrontEnd. Cada skill define reglas que el agente y los desarrolladores **DEBEN** respetar.

## ⚡ Skills disponibles

- **[svelte5](.agent/skills/svelte5/SKILL.md)**: Reglas para componentes Svelte 5 (runes, `$state`, `$props`) y arquitectura de rutas SvelteKit.
- **[responsive-design](.agent/skills/responsive-design/SKILL.md)**: Diseño mobile-first, breakpoints y layouts fluidos para Promiedos-NBA.
- **[code-quality](.agent/skills/code-quality/SKILL.md)**: Política "Sin Comentarios", naming conventions (Svelte/SvelteKit) y reglas de legibilidad.
- **[readme-auto-sync](.agent/skills/readme-auto-sync/SKILL.md)**: Reglas para mantener el README.md sincronizado con la estructura actual del proyecto.
- **[skill-generator](.agent/skills/skill-generator/SKILL.md)**: Herramienta para crear nuevas skills siguiendo el estándar del proyecto.

## 🛠️ Uso

1. **Antes de codear**: Consultá la skill relevante antes de implementar una nueva feature.
2. **Consistencia**: Si una skill define un patrón, seguilo estrictamente.
3. **Actualización**: Al establecer un nuevo patrón arquitectónico, actualizá la skill correspondiente o creá una nueva con `skill-generator`.
