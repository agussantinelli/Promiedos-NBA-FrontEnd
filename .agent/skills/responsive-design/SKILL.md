---
name: responsive-design
description: Diseño mobile-first y layouts fluidos para Promiedos-NBA FrontEnd.
---

# 📱 Promiedos-NBA — Responsive Design

Directrices para que el frontend se vea impecable en cualquier dispositivo.

## 📏 Principios

1. **Mobile-First**: Comenzá siempre con los estilos base para móvil. Agregá enhancements via `@media` para pantallas más grandes.
2. **Unidades Fluidas**: Usá `rem`, `em`, `vw`, `vh`, `%` en lugar de `px` fijos.
3. **Grid & Flexbox**: CSS Grid para el layout general de página; Flexbox para alineación de componentes individuales.
4. **Breakpoints consistentes**: Definí variables CSS en `app.css` y reutilizalas en toda la app:
   ```css
   /* app.css */
   --bp-sm: 640px;
   --bp-md: 768px;
   --bp-lg: 1024px;
   --bp-xl: 1280px;
   ```
5. **Touch Targets**: Los elementos interactivos deben tener un área mínima de 44×44px.
6. **Scoreboard primero**: Los componentes clave (scoreboard, tabla de stats) deben ser completamente funcionales en mobile antes de trabajar el layout desktop.
