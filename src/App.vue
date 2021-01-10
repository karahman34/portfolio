<template>
  <div id="app">
    <!-- Contact Dialog -->
    <contact-dialog
      v-if="showContactDialog"
      @hide="showContactDialog = false"
    ></contact-dialog>

    <!-- Screenshot Dialog -->
    <screenshot-dialog
      v-if="screenshotDialog"
      :images="projectScreenshots"
      @hide="toggleScreenshotDialog"
    ></screenshot-dialog>

    <!-- The navigation -->
    <navigation></navigation>

    <!-- The Jumbotron -->
    <jumbotron @show-contact="showContactDialog = true"></jumbotron>

    <!-- The About -->
    <about></about>

    <!-- The Projects -->
    <projects @show-screenshots="toggleScreenshotDialog"></projects>

    <!-- The Skills -->
    <skills></skills>

    <!-- The Footer -->
    <the-footer></the-footer>
  </div>
</template>

<script>
import ContactDialog from '@/components/ContactDialog'
import ScreenshotDialog from '@/components/ScreenshotDialog'
import Jumbotron from '@/components/Jumbotron'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import TheFooter from '@/components/Footer'
import Navigation from '@/components/Navigation'

export default {
  name: 'App',

  components: {
    About,
    Jumbotron,
    Projects,
    Skills,
    TheFooter,
    Navigation,
    ContactDialog,
    ScreenshotDialog
  },

  data() {
    return {
      showContactDialog: false,
      screenshotDialog: false,
      projectScreenshots: null
    }
  },

  methods: {
    toggleScreenshotDialog(images = null) {
      this.screenshotDialog = !this.screenshotDialog
      this.projectScreenshots = images
    }
  }
}
</script>

<style lang="scss">
#app {
  --primary-color: rgb(16, 185, 129);

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgb(31, 41, 45);
  width: 100%;
  min-height: 100vh;

  .container {
    margin: 0 auto !important;
    width: 90% !important;
  }

  .background-particles {
    position: relative;
    padding: 1.5rem 0;
    background-color: transparent;
  }

  .background-gray {
    background-color: #f3f3f3;
  }

  .particles-js-canvas-el {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: rgb(35, 39, 65);
  }

  .header-context {
    @apply font-mono;

    width: max-content;
    margin: 0 auto;
    font-weight: 600;
    font-size: 25px;
    margin-bottom: 1.3rem;
    color: rgba(0, 0, 0, 0.8);

    &::after {
      content: '';
      display: block;
      height: 4px;
      background-color: rgba(0, 0, 0, 0.7);
    }
  }
}
</style>
