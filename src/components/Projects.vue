<template>
  <div id="projects" class="z-10 background-particles">
    <div class="container">
      <div class="header-context">MY PROJECTS</div>

      <!-- List of projects -->
      <div
        class="grid grid-cols-12 projects-container mx-auto gap-y-8 md:gap-8"
      >
        <!-- Col -->
        <div
          v-for="project in paginatedItems"
          :key="project.title"
          class="col-span-12 md:col-span-6 lg:col-span-4"
          data-aos="zoom-in"
          data-aos-once="true"
        >
          <!-- Card -->
          <div
            class="dialog-trigger project-item bg-white rounded-b cursor-pointer overflow-hidden"
            @click="emitShowScreenshotsEvent(project.images)"
          >
            <!-- Screenshot -->
            <img
              class="object-cover w-full"
              :src="project.images[0]"
              style="min-height: 200px; max-height: 220px;"
            />

            <div class="px-5 py-2">
              <!-- Tags -->
              <div class="flex flex-wrap gap-2 my-1">
                <div
                  v-for="tag in project.tags"
                  :key="tag"
                  class="bg-gray-200 px-2 rounded text-gray-700"
                >
                  {{ tag }}
                </div>
              </div>

              <!-- Title -->
              <div class="text-lg font-semibold">{{ project.title }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Load More Button -->
      <div class="w-max mt-6 mb-1 mx-auto cursor-pointer">
        <button
          v-if="nextPage"
          class="cursor-pointer rounded py-1 cursor-pointer px-4 bg-green-500 font-medium text-lg text-white focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 lg:py-2 lg:text-xl"
          @click="page += 1"
        >
          Load More
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [],
      page: 1,
      perPage: 6
    }
  },

  created() {
    this.projects = [
      {
        title: 'Vue Admin Template',
        tags: ['vue', 'tailwind'],
        images: [
          '/projects/vtail-admin/one.png',
          '/projects/vtail-admin/two.png',
          '/projects/vtail-admin/three.png'
        ]
      },
      {
        title: 'Calculator',
        tags: ['vue'],
        images: ['/projects/calculator/one.png', '/projects/calculator/two.png']
      },
      {
        title: 'Channel Chat',
        tags: ['laravel', 'vue', 'vuetify'],
        images: [
          '/projects/channel-chat/one.png',
          '/projects/channel-chat/two.png'
        ]
      },
      {
        title: 'Marvel',
        tags: ['vue', 'vuetify'],
        images: [
          '/projects/marvel/one.png',
          '/projects/marvel/two.png',
          '/projects/marvel/three.png',
          '/projects/marvel/four.png',
          '/projects/marvel/five.png'
        ]
      },
      {
        title: 'Forum',
        tags: ['laravel', 'vue', 'bulma'],
        images: [
          '/projects/forum/one.png',
          '/projects/forum/two.png',
          '/projects/forum/three.png',
          '/projects/forum/four.png',
          '/projects/forum/five.png'
        ]
      },
      {
        title: 'Quiz App',
        tags: ['laravel', 'vue', 'tailwind'],
        images: [
          '/projects/quiz/one.png',
          '/projects/quiz/two.png',
          '/projects/quiz/three.png',
          '/projects/quiz/four.png',
          '/projects/quiz/five.png'
        ]
      },
      {
        title: 'Tic tac toe',
        tags: ['vue'],
        images: [
          '/projects/tic-tac-toe/one.png',
          '/projects/tic-tac-toe/two.png'
        ]
      },
      {
        title: 'Table Service',
        tags: ['laravel', 'vue', 'vuetify'],
        images: [
          '/projects/table-service/one.png',
          '/projects/table-service/two.png',
          '/projects/table-service/three.png',
          '/projects/table-service/four.png',
          '/projects/table-service/five.png',
          '/projects/table-service/six.png'
        ]
      },
      {
        title: 'Company Landing Page',
        tags: ['bootstrap'],
        images: ['/projects/company-landing-page/one.png']
      }
    ].sort(() => Math.random() - 0.5)
  },

  computed: {
    paginatedItems() {
      const items = []
      const take = this.page * this.perPage

      for (let n = 0; n < take; n++) {
        const project = this.projects[n]
        if (items.length === take || !project) return items

        items.push(this.projects[n])
      }

      return items
    },
    nextPage() {
      const take = this.page * this.perPage

      return this.projects.length > take
    }
  },

  methods: {
    emitShowScreenshotsEvent(images) {
      return this.$emit('show-screenshots', images)
    }
  },

  mounted() {
    // Load particles
    window.particlesJS.load('projects', '/particles.json')
  }
}
</script>

<style lang="scss" scoped>
.header-context {
  color: white !important;

  &::after {
    background-color: var(--primary-color) !important;
  }
}

.projects-container {
  @media screen and (min-width: 1024px) {
    & {
      max-width: calc(100% - 15%);
    }
  }

  .project-item {
    transition: transform 200ms ease-in;

    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>
