<template>
  <footer id="app-footer" class="background-particles">
    <div class="container text-center text-white font-base">
      Jaka Rahman Hidayat | &copy; 2021 All Right Reserved
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
