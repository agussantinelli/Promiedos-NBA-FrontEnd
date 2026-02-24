<script setup lang="ts">
defineProps<{ id: string }>()
</script>

<template>
  <div class="team-detail">
    <h1>🏟️ Detalle de Franquicia: {{ id }}</h1>
    <p>Datos históricos, campeonatos y finales.</p>
  </div>
</template>

<style scoped>
.team-detail {
  padding: 2rem;
}
</style>
