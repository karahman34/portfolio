<template>
  <footer id="app-footer" class="background-particles">
    <div class="container text-center text-white">
      2021 | Created by <b>Jaka Rahman Hidayat</b>
    </div>
  </footer>
</template>

<script>
export default {
  mounted() {
    // Load particles
    window.particlesJS.load('app-footer', '/particles.json')
  }
}
</script>

<style scoped>
#app-footer {
  padding: 0.75rem 0 !important;
}
</style>
