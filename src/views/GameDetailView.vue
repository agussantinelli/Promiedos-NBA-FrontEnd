<script setup lang="ts">
defineProps<{ id: string }>()
</script>

<template>
  <div class="game-detail">
    <h1>🏀 Detalle del Partido: {{ id }}</h1>
    <p>Score por cuarto, boxscore y mejores jugadores.</p>
  </div>
</template>

<style scoped>
.game-detail {
  padding: 2rem;
}
</style>
