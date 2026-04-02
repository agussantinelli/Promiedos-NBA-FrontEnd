---
name: accessibility
description: Reglas obligatorias para garantizar la accesibilidad web (A11y) en Promiedos-NBA. Sigue estándares WCAG 2.1 para usuarios con discapacidad visual y navegación por teclado.
---

# ♿ Web Accessibility (A11y) - Estándar Promiedos-NBA

Esta skill define las reglas obligatorias para que la interfaz de Promiedos-NBA sea inclusiva. Todo componente nuevo o modificado en el frontend **debe** cumplir con estos lineamientos de accesibilidad sin comprometer la estética premium.

## 📋 Reglas de Oro (Mandatory)

### 1. Etiquetas de Interacción (`aria-label`)
Cualquier botón, enlace o control que use únicamente un icono (SVG/Lucide) **DEBE** tener un `aria-label` descriptivo en el idioma de la interfaz (Español).
- **✅ Correcto**: `<button aria-label="Cerrar ventana"><X /></button>`
- **❌ Incorrecto**: `<button><X /></button>`

### 2. Iconos Decorativos (`aria-hidden`)
Todos los iconos o SVGs que no aporten información semántica (ej: flechas de adorno, iconos junto a texto descriptivo) **DEBEN** tener `aria-hidden="true"`.
- **✅ Correcto**: `<span><LuBot aria-hidden="true" /> Asistente</span>`
- **❌ Incorrecto**: `<span><LuBot /> Asistente</span>` (El lector de voz dirá "Imagen" o el nombre del icono).

### 3. Navegación por Teclado
- **Foco Visible**: Nunca elimines el `outline` del foco a menos que proveas una alternativa visual clara.
- **Tabulación Lógica**: Los elementos interactivos deben seguir el orden visual del DOM.
- **Eventos Combinados**: Los elementos no semánticos (ej: un `div` que actúa como botón, aunque se prefiere usar `<button>`) deben manejar `onKeyDown` (teclas Enter y Space).

### 4. Regiones Dinámicas (`aria-live`)
Para componentes que actualizan contenido sin recargar la página (Resultados, Partidos en vivo, Notificaciones), usa `aria-live` para anunciar cambios a los lectores de pantalla.
- `aria-live="polite"`: Para mensajes informativos (ej: "Resultado actualizado").
- `aria-live="assertive"`: Para errores críticos (ej: "Error al cargar partidos").

### 5. Semántica de Estructura
- Usa **Landmarks** (`<main>`, `<nav>`, `<header>`, `<footer>`, `<aside>`).
- Mantén una jerarquía de encabezados coherente (`h1` -> `h2` -> `h3`). No saltes niveles (ej: de `h1` a `h4`).
- Usa `role="region"` y `aria-labelledby` en secciones complejas como el Marcador o el Dashboard de estadísticas.

## 🛠️ Checklist de Validación
- [ ] ¿Todos los botones tienen texto visible o un `aria-label`?
- [ ] ¿Los iconos decorativos están ocultos para los lectores (`aria-hidden`)?
- [ ] ¿Puedo completar el flujo principal (ej: ver detalles de un partido) usando solo el teclado (`Tab` + `Enter`)?
- [ ] ¿Los cambios de estado (cargando, éxito, error) se anuncian?
- [ ] ¿Las imágenes de equipos/jugadores tienen un `alt` descriptivo (o `alt=""` si son decorativas)?

---

_Cualquier componente que ignore estas reglas será considerado un fallo de calidad técnica._
