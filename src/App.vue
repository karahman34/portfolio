<template>
  <div id="app" class="text-gray-800">
    <!-- Contact Dialog -->
    <contact-dialog v-model="showContactDialog"></contact-dialog>

    <!-- Screenshot Dialog -->
    <screenshot-dialog
      v-model="screenshotDialog"
      :images="projectScreenshots"
    ></screenshot-dialog>

    <!-- The navigation -->
    <navigation></navigation>

    <!-- The Jumbotron -->
    <jumbotron @show-contact="showContactDialog = true"></jumbotron>

    <!-- The About -->
    <about></about>

    <!-- The Projects -->
    <projects @show-screenshots="showScreenshotDialog"></projects>

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
      projectScreenshots: []
    }
  },

  mounted() {
    // Set document title.
    document.title = 'Portfolio'
  },

  watch: {
    screenshotDialog(val) {
      if (!val) {
        this.projectScreenshots = []
      }
    }
  },

  methods: {
    showScreenshotDialog(images) {
      this.screenshotDialog = true
      this.projectScreenshots = images
    }
  }
}
</script>

<style lang="scss">
// Import the main scss file.
@import '/assets/sass/app.scss';
</style>
