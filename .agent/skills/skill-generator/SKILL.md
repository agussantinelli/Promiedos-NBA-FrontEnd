---
name: skill-generator
description: Herramienta para crear nuevas skills siguiendo el estándar de Promiedos-NBA FrontEnd.
---

# 🛠️ Promiedos-NBA — Skill Generator

Usá esta skill cada vez que necesitéis crear una nueva directriz para el proyecto FrontEnd.

## 📝 Instrucciones

1. **Ubicación**: `.agent/skills/<nombre>/SKILL.md`
2. **Metadata**: Incluí `name` y `description` en el frontmatter YAML.
3. **Alcance**: Las skills del FrontEnd deben enfocarse en diseño visual, arquitectura de componentes Svelte, routing SvelteKit, y convenciones de código.
4. **Registrá la nueva skill** en `global-skills/SKILL.md` después de crearla.

## 📄 Template

```markdown
---
name: <nombre-kebab-case>
description: <Una línea describiendo el propósito>.
---

# <Emoji> Promiedos-NBA — <Nombre>

<Descripción breve del propósito de esta skill.>

## 📏 Reglas

1. **Regla 1**: ...
2. **Regla 2**: ...
```
