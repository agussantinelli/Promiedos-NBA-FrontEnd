<h1>🏀 Promiedos NBA – FrontEnd</h1>

<div align="center">

  <a href="https://github.com/agussantinelli/Promiedos-NBA-BackEnd" target="_blank" style="text-decoration: none;">
    <img src="https://img.shields.io/badge/⚙️%20Repo%20Backend-Node.js%20%7C%20Express-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Repo Backend"/>
  </a>

  <a href="https://github.com/agussantinelli/Promiedos-NBA-FrontEnd" target="_blank" style="text-decoration: none;">
    <img src="https://img.shields.io/badge/💻%20Repo%20Frontend-Astro%20%7C%20TypeScript-FF5F00?style=for-the-badge&logo=astro&logoColor=white" alt="Repo Frontend"/>
  </a>

  <a href="https://github.com/agussantinelli" target="_blank">
    <img src="https://img.shields.io/badge/👤%20Agustín%20Santinelli-agussantinelli-000000?style=for-the-badge&logo=github&logoColor=white" alt="Agus"/>
  </a>

</div>

<div align="center">
  <img src="https://img.shields.io/badge/Astro-Framework-FF5F00?style=for-the-badge&logo=astro&logoColor=white" alt="Astro Badge"/>
  <img src="https://img.shields.io/badge/TypeScript-Lenguaje-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript Badge"/>
  <img src="https://img.shields.io/badge/HTML%20%7C%20CSS-UI-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="HTML/CSS Badge"/>
</div>

<div align="center">
    <a href="https://drive.google.com/drive/folders/1EUGlDWBfIjM2IB9C-M7n3oqcy_gZE8f-" target="_blank">
        <img src="https://img.shields.io/badge/📂%20Documentación%20del%20Proyecto-Google%20Drive-4285F4?style=for-the-badge&logo=googledrive&logoColor=white" alt="Docs Badge"/>
    </a>
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
  Basketball Reference y ESPN Stats, pero con foco total en la NBA y en una experiencia limpia, rápida y bien organizada.
</p>

<hr/>

<h2>🧱 Stack tecnológico (FrontEnd)</h2>

<table>
  <thead>
    <tr>
      <th>Componente</th>
      <th>Tecnología</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Framework</strong></td>
      <td>Astro</td>
      <td>Render híbrido (SSR/SSG), ideal para contenido estático y performance.</td>
    </tr>
    <tr>
      <td><strong>Lenguaje</strong></td>
      <td>TypeScript</td>
      <td>Tipado estricto en todos los componentes y lógica de datos.</td>
    </tr>
    <tr>
      <td><strong>UI</strong></td>
      <td>HTML + CSS / Tailwind (a definir)</td>
      <td>Diseño moderno, responsive y accesible.</td>
    </tr>
    <tr>
      <td><strong>Datos</strong></td>
      <td>REST API</td>
      <td>Consumo del backend Promiedos NBA en Node + Express + MySQL.</td>
    </tr>
    <tr>
      <td><strong>SEO</strong></td>
      <td>Astro Islands + Meta tags</td>
      <td>Páginas estáticas optimizadas para buscadores.</td>
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
      <li>Resumen del encuentro (texto + datos).</li>
    </ul>
  </li>
  <li>Sección de <strong>partidos del día</strong> y calendario por fecha/temporada.</li>
</ul>

<h3>📈 Estadísticas de jugadores y equipos</h3>
<ul>
  <li>Estadísticas individuales:
    <ul>
      <li><strong>PPG</strong> (puntos por partido)</li>
      <li><strong>APG</strong> (asistencias por partido)</li>
      <li><strong>RPG</strong> (rebotes por partido, si se incluye)</li>
      <li><strong>BPG</strong> (tapones por partido)</li>
      <li><strong>SPG</strong> (robos por partido)</li>
      <li><strong>Stocks</strong> (robos + tapones)</li>
      <li>MPG / Minutos jugados, eficiencia y más métricas avanzadas (a definir).</li>
    </ul>
  </li>
  <li>Estadísticas por equipo y por temporada.</li>
  <li>Rankings ordenados por distintas métricas (scorers, pasadores, defensores, etc.).</li>
</ul>

<h3>🏆 Logros individuales e historia</h3>
<ul>
  <li>Secciones históricas de:
    <ul>
      <li><strong>MVP</strong> por temporada.</li>
      <li><strong>All-Star</strong> (participaciones, MVPs del All-Star Game).</li>
      <li><strong>Hall of Fame</strong> y jugadores legendarios.</li>
      <li>Otros premios: DPOY, ROY, MIP, 6MOY, Finals MVP, etc. (a futuro).</li>
    </ul>
  </li>
  <li>Listados por década, franquicia, posición, etc.</li>
</ul>

<h3>🏟️ Páginas estáticas por equipo</h3>
<ul>
  <li>Ficha completa de cada franquicia:
    <ul>
      <li>Nombre, ciudad, año de fundación.</li>
      <li><strong>Datos históricos</strong> (campeonatos, finales, rachas importantes).</li>
      <li>Fotos del equipo, <strong>estadio</strong> e infraestructura.</li>
      <li>Información sobre la <strong>idiosincrasia</strong> de la franquicia 
          (cultura, rivalidades, jugadores emblemáticos).</li>
    </ul>
  </li>
  <li>Páginas totalmente en español, pensadas como “wiki visual” de cada equipo.</li>
</ul>

<hr/>

<h2>🧩 Arquitectura del FrontEnd</h2>

<ul>
  <li>Rutas de Astro para:
    <ul>
      <li><code>/</code> – Dashboard general con partidos del día y destacados.</li>
      <li><code>/teams</code> – Listado de equipos.</li>
      <li><code>/teams/[id]</code> – Página estática con datos de cada equipo.</li>
      <li><code>/games/today</code> – Partidos de la jornada.</li>
      <li><code>/games/[id]</code> – Detalle completo del partido.</li>
      <li><code>/players</code> – Listados y rankings de jugadores.</li>
      <li><code>/history</code> – Logros históricos y premios.</li>
    </ul>
  </li>
  <li>Componentes reutilizables para tarjetas de partido, tablas de estadísticas y cabeceras de sección.</li>
  <li>Consumo de datos desde el BackEnd via fetch/cliente HTTP.</li>
</ul>

<hr/>

<h2>🚀 Puesta en marcha (dev)</h2>

<pre><code>npm install
npm run dev
</code></pre>

<p>El proyecto apunta a desplegarse en un hosting estatico/SSR compatible con Astro (ej: Vercel, Netlify, etc.).</p>

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

<h2>📬 Contacto</h2>

<p>
  Autor: <strong>Agustín Santinelli</strong><br/>
  Email: <a href="mailto:agustinsantinelli@gmail.com">agustinsantinelli@gmail.com</a><br/>
  GitHub: <a href="https://github.com/agussantinelli" target="_blank">@agussantinelli</a>
</p>

<hr/>

<p><em>Promiedos NBA – Estadísticas, historia y cultura del baloncesto en la NBA, en español.</em></p>
