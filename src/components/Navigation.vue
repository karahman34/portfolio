<template>
  <div
    id="nav"
    class="w-full z-40 py-3 text-white bg-transparent font-mono flex items-center"
    :class="{
      'nav-bg': showNavBg
    }"
  >
    <!-- Menus -->
    <div class="container flex justify-between items-center">
      <!-- Left -->
      <div
        class="cursor-pointer flex items-center"
        @click="scrollToElement('#jumbotron')"
      >
        <img src="@/assets/images/logo.png" class="logo" alt="Logo" />
        <span
          class="uppercase text-xl ml-1 font-medium md:font-semibold md:text-2xl md:ml-2"
          >My Portfolio</span
        >
      </div>

      <!-- Right -->
      <div class="hidden gap-3 lg:gap-5 md:flex md:items-center">
        <!-- List of menus -->
        <div
          v-for="menu in menus"
          :key="menu.text"
          class="cursor-pointer uppercase menu-item"
          :class="{ active: menu.active }"
          @click="scrollToElement(menu)"
        >
          <div class="tracking-widest">{{ menu.text }}</div>
        </div>
      </div>

      <!-- Right - Mobile -->
      <div class="mobile-menu cursor-pointer relative block md:hidden">
        <!-- Trigger On -->
        <span
          class="mobile-menu-trigger mdi mdi-menu"
          :class="{ 'is-hidden': mobileNav }"
          @click="mobileNav = true"
        ></span>

        <!-- Trigger Off -->
        <span
          class="mobile-menu-trigger mdi mdi-close"
          :class="{ 'is-hidden': !mobileNav }"
          @click="mobileNav = false"
        ></span>

        <!-- Menus Container -->
        <div
          class="mobile-menu-container absolute right-0 left-auto py-2 rounded bg-white"
          :class="{ 'is-hidden': !mobileNav }"
        >
          <!-- List of menus -->
          <div
            v-for="menu in menus"
            :key="menu.text"
            class="py-1 px-3 text-lg text-gray-800 hover:bg-gray-300"
            @click="scrollToElement(menu)"
          >
            {{ menu.text }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        {
          text: 'Top',
          selector: '#jumbotron',
          active: false
        },
        {
          text: 'About',
          selector: '#about',
          active: false
        },
        {
          text: 'Projects',
          selector: '#projects',
          active: false
        },
        {
          text: 'Skills',
          selector: '#skills',
          active: false
        }
      ],
      showNavBg: false,
      mobileNav: false
    }
  },

  mounted() {
    this.toggleNavActive()

    window.addEventListener('click', this.clickOutsideHandler)
    window.addEventListener('scroll', this.windowResizeHandler)
  },

  methods: {
    toggleNavBg() {
      const scrollY = window.scrollY
      const navHeight = this.$el.clientHeight
      const jumbotronHeight = document.querySelector('#jumbotron').clientHeight

      this.showNavBg = scrollY >= jumbotronHeight - navHeight
    },
    toggleNavActive() {
      const currPosition = window.scrollY

      for (const menu of this.menus) {
        const el = document.querySelector(menu.selector)
        const elOffset = el.offsetTop - this.$el.scrollHeight
        const elHeight = elOffset + el.scrollHeight

        if (elOffset <= currPosition && currPosition < elHeight) {
          // Set inactive for all menus.
          this.menus.forEach(menu => (menu.active = false))

          // Set new active menu.
          menu.active = true
          break
        }
      }
    },
    windowResizeHandler() {
      this.toggleNavBg()
      this.toggleNavActive()
    },
    clickOutsideHandler(e) {
      if (this.mobileNav) {
        const exluded = [
          ...document.querySelectorAll('.mobile-menu-trigger'),
          document.querySelector('.mobile-menu-container')
        ]

        const target = e.target
        for (let i = 0; i < exluded.length; i++) {
          const el = exluded[i]
          if (el.isSameNode(target)) {
            return
          }
        }

        this.mobileNav = false
      }
    },
    scrollToElement(menu) {
      const target = document.querySelector(menu.selector)
      const navHeight = this.$el.clientHeight

      window.scroll({
        top: target.offsetTop - navHeight,
        left: 0,
        behavior: 'smooth'
      })
    }
  },

  beforeDestroy() {
    window.removeEventListener('click', this.clickOutsideHandler)
    window.removeEventListener('scroll', this.windowResizeHandler)
  }
}
</script>

<style lang="scss" scoped>
#nav {
  -webkit-tap-highlight-color: transparent;
  height: 58px;
  position: fixed;
  top: 0;

  @media screen and (min-width: 768px) {
    & {
      height: 65px;
    }
  }

  .logo {
    height: 2.5rem;

    @media screen and (min-width: 1024px) {
      & {
        height: 3.3rem;
      }
    }
  }

  .menu-item {
    &::after {
      content: '';
      display: none;
      height: 4px;
      width: 100%;
      border-radius: 8px;
      background-color: var(--primary-color);
    }

    &.active {
      margin-top: 4px;

      &::after {
        display: block;
      }
    }

    &:hover {
      margin-top: 4px;

      &::after {
        display: block;
      }
    }
  }

  .mobile-menu {
    .mobile-menu-trigger {
      display: inline-block;
      padding-top: 5px;
      opacity: 1;
      font-size: 1.5rem;
      line-height: 1.5rem;
      transition: opacity 250ms linear, font-size 0ms linear 250ms;
    }

    .mobile-menu-trigger.is-hidden {
      opacity: 0;
      font-size: 0rem;
    }

    .mobile-menu-container {
      box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
      transform: scale(1);
      transition: transform 300ms;
    }

    .mobile-menu-container.is-hidden {
      transform: scale(0);
    }
  }
}

.nav-bg {
  background-color: rgb(35, 39, 65);
}
</style>
