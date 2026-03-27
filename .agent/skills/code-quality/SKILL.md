---
name: code-quality
description: Reglas de calidad de código, legibilidad y política "Sin Comentarios" para el FrontEnd de Promiedos-NBA.
---

# 💎 Promiedos-NBA — Code Quality (FrontEnd)

Estándares para mantener un codebase premium y legible.

## 📏 Reglas

1. **Sin Comentarios**: El código debe ser autoexplicativo. Usá nombres descriptivos en lugar de comentarios.
2. **Sin Código Muerto**: Nunca dejés bloques comentados. Si algo no se usa, se elimina.
3. **Props Tipadas**: Declará siempre las props con `$props()` y tipos TypeScript explícitos.
4. **Consistencia en Fetch**: Todos los llamados a la API Fastify deben hacerse a través de una función en `src/lib/services/`, nunca directamente en un componente.
5. **Naming**:
   - Componentes Svelte: `PascalCase` (ej. `ScoreCard.svelte`).
   - Funciones y variables: `camelCase`.
   - Archivos de servicio: `kebab-case` (ej. `game-service.ts`).
   - Rutas SvelteKit: `kebab-case` (ej. `src/routes/game-detail/`).
6. **Un componente, una responsabilidad**: Si un componente hace demasiado, extraé la lógica a un helper en `src/lib/utils/` o a una función en `src/lib/services/`.
