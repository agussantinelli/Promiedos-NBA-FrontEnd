<h1 align="center">🏀 Promiedos NBA – FrontEnd</h1>

<div align="center">

  <a href="https://github.com/agussantinelli/Promiedos-NBA-FrontEnd" target="_blank" style="text-decoration: none;">
    <img src="https://img.shields.io/badge/💻%20Repo%20Frontend-SvelteKit%20%7C%20TypeScript-FF3E00?style=for-the-badge&logo=svelte&logoColor=white" alt="Repo Frontend"/>
  </a>

  <a href="https://github.com/agussantinelli/Promiedos-NBA-BackEnd" target="_blank" style="text-decoration: none;">
    <img src="https://img.shields.io/badge/⚙️%20Repo%20Backend-Fastify%20%7C%20PostgreSQL-000000?style=for-the-badge&logo=fastify&logoColor=white" alt="Repo Backend"/>
  </a>

  <a href="https://github.com/agussantinelli" target="_blank">
    <img src="https://img.shields.io/badge/👤%20Agustín%20Santinelli-agussantinelli-000000?style=for-the-badge&logo=github&logoColor=white" alt="Agus"/>
  </a>

</div>

<div align="center">
  <img src="https://img.shields.io/badge/SvelteKit-Framework-FF3E00?style=for-the-badge&logo=svelte&logoColor=white" alt="SvelteKit Badge"/>
  <img src="https://img.shields.io/badge/TypeScript-Lenguaje-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript Badge"/>
  <img src="https://img.shields.io/badge/Vite-Build%20Tool-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite Badge"/>
  <img src="https://img.shields.io/badge/pnpm-Package%20Manager-F69220?style=for-the-badge&logo=pnpm&logoColor=white" alt="pnpm Badge"/>
</div>

<div align="center">
    <a href="https://drive.google.com/drive/folders/1EUGlDWBfIjM2IB9C-M7n3oqcy_gZE8f-" target="_blank">
        <img src="https://img.shields.io/badge/📂%20Documentación%20del%20Proyecto-Google%20Drive-4285F4?style=for-the-badge&logo=googledrive&logoColor=white" alt="Docs Badge"/>
    </a>
</div>
<div align="center">
  <img src="https://img.shields.io/badge/Copyright-All_Rights_Reserved-red?style=for-the-badge&logo=copyright&logoColor=white" alt="Copyright Badge"/>
</div>
<hr/>

<h2>🎯 Objetivo del proyecto</h2>

<p>
  <strong>Promiedos NBA</strong> es una plataforma moderna en <strong>español</strong> que centraliza toda la información 
  de la <strong>NBA</strong> en un solo lugar: resultados en vivo, estadísticas avanzadas, datos históricos, logros individuales 
  y fichas completas de cada franquicia.
</p>

<p>
  La idea es crear una web que hoy <strong>no existe en español</strong>, combinando el espíritu de sitios como Promiedos, 
  Basketball Reference y ESPN Stats, aprovechando la reactividad y el rendimiento de <strong>SvelteKit</strong> para una experiencia de usuario fluida, rápida y con soporte SSR.
</p>

<hr/>

<h2>🧱 Stack tecnológico (FrontEnd)</h2>

<table>
  <thead>
    <tr>
      <th align="left">Componente</th>
      <th align="left">Tecnología</th>
      <th align="left">Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Framework</strong></td>
      <td>SvelteKit</td>
      <td>Framework oficial de Svelte con SSR, routing y file-based pages.</td>
    </tr>
    <tr>
      <td><strong>UI</strong></td>
      <td>Svelte 5</td>
      <td>Compilador reactivo que genera código DOM nativo, sin Virtual DOM.</td>
    </tr>
    <tr>
      <td><strong>Lenguaje</strong></td>
      <td>TypeScript</td>
      <td>Tipado estático en todos los componentes y lógica de datos.</td>
    </tr>
    <tr>
      <td><strong>Build Tool</strong></td>
      <td>Vite</td>
      <td>Dev server ultrarrápido con HMR y builds optimizados.</td>
    </tr>
    <tr>
      <td><strong>Gestor de Paquetes</strong></td>
      <td>pnpm</td>
      <td>Eficiencia en la gestión de dependencias y tiempos de instalación reducidos.</td>
    </tr>
    <tr>
      <td><strong>Consumo de API</strong></td>
      <td>fetch nativo / SvelteKit load</td>
      <td>Consumo de la REST API (Fastify) usando las funciones <code>load</code> de SvelteKit.</td>
    </tr>
  </tbody>
</table>

<hr/>

<h2>📄 Contenido y secciones principales</h2>

<h3>📊 Resultados y estadísticas en tiempo real</h3>
<ul>
  <li>Resultados de la <strong>NBA actualizados en el momento</strong>.</li>
  <li>Detalle de cada partido:
    <ul>
      <li>Score por cuarto, prórrogas, boxscore básico.</li>
      <li>Mejores jugadores del partido.</li>
    </ul>
  </li>
  <li>Sección de <strong>partidos del día</strong> y calendario dinámico.</li>
</ul>

<h3>📈 Estadísticas de jugadores y equipos</h3>
<ul>
  <li>Estadísticas individuales filtrables:
    <ul>
      <li><strong>PPG</strong>, <strong>APG</strong>, <strong>RPG</strong>, <strong>BPG</strong>, <strong>SPG</strong>.</li>
      <li><strong>Stocks</strong> (robos + tapones).</li>
      <li>Métricas avanzadas procesadas en el cliente para mayor velocidad.</li>
    </ul>
  </li>
  <li>Rankings en tiempo real ordenados por distintas métricas.</li>
</ul>

<h3>🏆 Logros individuales e historia</h3>
<ul>
  <li>Secciones históricas dinámicas:
    <ul>
      <li><strong>MVP</strong>, <strong>All-Star</strong>, <strong>Hall of Fame</strong>.</li>
      <li>Premios adicionales (DPOY, ROY, etc.) con vistas de detalle.</li>
    </ul>
  </li>
</ul>

<h3>🏟️ Páginas dinámicas por equipo</h3>
<ul>
  <li>Ficha completa de cada franquicia mediante rutas dinámicas de SvelteKit:
    <ul>
      <li>Datos históricos, campeonatos y finales.</li>
      <li>Información visual de estadios e infraestructura.</li>
      <li>Cultura y jugadores emblemáticos presentados de forma interactiva.</li>
    </ul>
  </li>
</ul>

<hr/>

<h2>🧩 Arquitectura del FrontEnd (SvelteKit)</h2>

<ul>
  <li><strong>File-based Routing (SvelteKit):</strong> Páginas en <code>src/routes/</code> — Dashboard, Teams, GameDetail, Players, History.</li>
  <li><strong>Componentes Svelte:</strong> Organizados en <code>src/lib/components/</code>.</li>
  <li><strong>Servicios:</strong> Centralizados en <code>src/lib/services/</code> para llamadas a la API Fastify.</li>
  <li><strong>Tipos:</strong> Definiciones TypeScript compartidas en <code>src/lib/types/</code>.</li>
</ul>

<hr/>

<h2>📁 Estructura del Proyecto</h2>

<pre><code>Promiedos-NBA-FrontEnd/
├── src/
│   ├── lib/
│   │   ├── components/                          # Componentes Svelte reutilizables
│   │   │   ├── common/                          # Botones, Spinners, Modales
│   │   │   ├── layout/                          # Navbar, Sidebar, Footer
│   │   │   └── widgets/                         # Tablas de stats, scoreboards
│   │   ├── services/                            # Comunicación con API Fastify (fetch)
│   │   ├── types/                               # Interfaces y definiciones TS
│   │   └── utils/                               # Helpers de formateo
│   ├── routes/                                  # Páginas SvelteKit (file-based routing)
│   │   ├── +layout.svelte                       # Layout raíz
│   │   ├── +page.svelte                         # Dashboard (Home)
│   │   ├── teams/                               # Listado y detalle de equipos
│   │   ├── players/                             # Listado y detalle de jugadores
│   │   └── history/                             # Sección histórica
│   └── app.html                                 # Template HTML base
├── static/                                      # Archivos estáticos
├── .gitignore
├── package.json
├── pnpm-lock.yaml
├── svelte.config.js                             # Configuración de SvelteKit
├── tsconfig.json
└── vite.config.ts                               # Configuración de Vite
</code></pre>

<hr/>

<h2>🛠️ Skills Especializadas</h2>
<p>Ubicadas en <code>.agent/skills/</code>, son guías técnicas que definen cómo se deben construir las diferentes partes del sistema:</p>

<ul>
    <li><b>⚡ svelte5:</b> Reglas para componentes Svelte 5 (runes, <code>$state</code>, <code>$props</code>) y arquitectura de rutas SvelteKit.</li>
    <li><b>📱 responsive-design:</b> Diseño mobile-first, breakpoints consistentes y layouts fluidos para Promiedos-NBA.</li>
    <li><b>🧹 code-quality:</b> Política "Sin Comentarios", naming conventions (Svelte/SvelteKit) y fetch centralizado en <code>src/lib/services/</code>.</li>
    <li><b>🔄 readme-auto-sync:</b> Sincronización obligatoria del README cuando cambia la estructura, el stack o los comandos.</li>
    <li><b>📚 global-skills:</b> Índice maestro de todas las skills de diseño disponibles en el proyecto.</li>
</ul>

<hr/>

<h2>🚀 Puesta en marcha (dev)</h2>

<pre><code>pnpm install
pnpm dev
# Aplicación disponible en http://localhost:5173
</code></pre>

<p>El proyecto está configurado para desplegarse en plataformas con soporte SSR (Vercel, Netlify, etc.) mediante <code>@sveltejs/adapter-auto</code>.</p>

<hr/>

<h2>📌 Futuras extensiones</h2>

<p>
  La arquitectura de Promiedos NBA está pensada para poder expandirse a otras competiciones de baloncesto:
</p>

<ul>
  <li>Juegos Olímpicos (JJOO).</li>
  <li>EuroBasket.</li>
  <li>EuroLeague.</li>
  <li>Liga ACB.</li>
  <li>Liga Nacional Argentina.</li>
  <li>G League.</li>
  <li>Otras ligas y torneos FIBA.</li>
</ul>

<hr/>


<h2>💻 Comandos pnpm disponibles</h2>

<table>
  <thead>
    <tr>
      <th>Comando</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><p><code>pnpm dev</code></p></td>
      <td>Inicia el servidor de desarrollo local de <b>Vite</b> con HMR en <code>localhost:5173</code>.</td>
    </tr>
    <tr>
      <td><p><code>pnpm build</code></p></td>
      <td>Construye la aplicación optimizada para producción con <b>SvelteKit</b>.</td>
    </tr>
    <tr>
      <td><p><code>pnpm preview</code></p></td>
      <td>Previsualiza localmente la versión de producción generada.</td>
    </tr>
    <tr>
      <td><p><code>pnpm check</code></p></td>
      <td>Ejecuta <b>svelte-kit sync</b> y verifica tipos con <code>svelte-check</code>.</td>
    </tr>
    <tr>
      <td><p><code>pnpm check:watch</code></p></td>
      <td>Igual que <code>check</code> pero en modo observación continua.</td>
    </tr>
  </tbody>
</table>

<hr />

<h2>📬 Contacto</h2>

<div align="center">
  
  <img src="https://img.shields.io/badge/Autor-Agustín%20Santinelli-2b3137?style=for-the-badge&logo=person&logoColor=white" alt="Autor"/>

  <a href="mailto:agustinsantinelli@gmail.com">
    <img src="https://img.shields.io/badge/Email-agustinsantinelli%40gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email"/>
  </a>

  <a href="https://github.com/agussantinelli" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-@agussantinelli-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/>
  </a>

</div>
<hr>

<h2 align="left">⚖️ Licencia y Propiedad Intelectual</h2>

<p align="left">
  Este proyecto es <b>propiedad intelectual privada</b> de Agustín Santinelli. No se otorga ninguna licencia de uso abierto. Puedes consultar los términos detallados en el archivo 
  <a href="LICENSE"><code>LICENSE</code></a> incluido en este repositorio.
</p>

<p align="left">
  <i>
    ⚠️ <b>Restricción Firme:</b> Queda terminantemente prohibida la copia, reproducción, distribución o modificación de este código sin autorización expresa del autor. Este repositorio se publica exclusivamente como exhibición de portafolio profesional.
  </i>
</p>
<hr />

<h2 align="left">🚫 Copyright Total</h2>

<p align="left">
  Este proyecto es propiedad intelectual exclusiva de <b>Agustín Santinelli</b>. No se aceptan contribuciones externas o forks para su uso público sin previo acuerdo por escrito.
</p>

<p align="left">
  Si tienes sugerencias directas o deseas explorar colaboraciones comerciales, por favor contacta al autor: 
  <a href="mailto:agustinsantinelli@gmail.com">agustinsantinelli@gmail.com</a>.
</p>

<hr />

<p><em>Promiedos NBA – Estadísticas, historia y cultura del baloncesto en la NBA, en español.</em></p>
