<template>
  <div id="jumbotron" class="background-particles">
    <!-- Content -->
    <div
      class="container absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <!-- Bio -->
      <div class="flex justify-center items-center">
        <div class="text-white mt-3 md:mt-0">
          <!-- Greet -->
          <div
            class="greet inline-block font-semibold text-3xl md:text-4xl lg:text-5xl"
          >
            Hello everyone, i'm Jaka
          </div>

          <!-- Role -->
          <div
            class="role uppercase font-mono text-xl mb-1 md:text-2xl lg:text-3xl md:my-1"
          >
            a full stack web developer.
          </div>

          <!-- Contact Me -->
          <button
            v-if="showContactBtn"
            ref="showContactBtn"
            class="dialog-trigger py-1 px-4 bg-green-500 rounded uppercase text-lg font-mono font-medium focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 lg:text-xl hover:bg-green-600"
            data-aos="zoom-in"
            data-aos-once="true"
            data-aos-delay="350"
            @click="emitShowContactEvent"
          >
            Contact Me
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Typed from 'typed.js'
import ParticlesConfig from '@/assets/particles'

export default {
  data() {
    return {
      showContactBtn: false
    }
  },

  mounted() {
    // Load particles
    window.particlesJS('jumbotron', ParticlesConfig)

    // Load type js
    const greet = document.querySelector('#jumbotron .greet')
    const greetText = greet.textContent
    greet.innerHTML = ''
    const role = document.querySelector('#jumbotron .role')
    const roleText = role.textContent
    role.innerHTML = ''
    new Typed('#jumbotron .greet', {
      strings: [greetText],
      typeSpeed: 37,
      showCursor: false,
      onComplete: () => {
        new Typed('#jumbotron .role', {
          strings: [roleText],
          typeSpeed: 38,
          showCursor: false,
          onComplete: () => {
            this.showContactBtn = true

            this.$nextTick(() => this.playBounceAnimation())
          }
        })
      }
    })
  },

  methods: {
    emitShowContactEvent() {
      this.$refs.showContactBtn.classList.remove('animate-bounce')

      return this.$emit('show-contact')
    },
    playBounceAnimation() {
      setTimeout(() => {
        this.$refs.showContactBtn.classList.add('animate-bounce')

        this.$nextTick(() =>
          setTimeout(() => {
            this.$refs.showContactBtn.classList.remove('animate-bounce')
            this.playBounceAnimation()
          }, 5000)
        )
      }, 5000)
    }
  }
}
</script>

<style lang="scss" scoped>
#jumbotron {
  height: 40vh;
  width: 100%;

  @media screen and (min-width: 768px) {
    & {
      height: 44vh;
    }
  }

  @media screen and (min-width: 1024px) {
    & {
      height: 58vh;
    }
  }
}

.animate-bounce:hover {
  animation: none;
}
</style>
