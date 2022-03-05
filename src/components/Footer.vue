<template>
  <footer id="app-footer" class="background-particles">
    <div class="container text-center text-white">
      2022 | Created by
      <span class="text-green-300">Jaka Rahman Hidayat</span>
    </div>
  </footer>
</template>

<script>
import ParticlesConfig from '@/assets/particles'

export default {
  mounted() {
    // Load particles
    window.particlesJS('app-footer', ParticlesConfig)
  }
}
</script>

<style scoped>
#app-footer {
  padding: 0.75rem 0 !important;
}
</style>
