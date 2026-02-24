<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav class="navbar">
      <RouterLink to="/">Dashboard</RouterLink>
      <RouterLink to="/teams">Equipos</RouterLink>
      <RouterLink to="/players">Jugadores</RouterLink>
      <RouterLink to="/history">Historia</RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style>
:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;
  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;
}

.navbar {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background-color: #1a1a1a;
  border-bottom: 1px solid #333;
}

.navbar a {
  color: #fff;
  text-decoration: none;
  font-weight: 600;
}

.navbar a.router-link-active {
  color: #4fc08d;
}

main {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
