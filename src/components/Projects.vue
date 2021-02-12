<template>
  <div id="projects" class="z-10 background-particles">
    <div class="container">
      <div class="header-context">my projects</div>

      <!-- List of projects -->
      <div
        class="grid grid-cols-12 projects-container mx-auto gap-y-8 md:gap-8"
      >
        <!-- Col -->
        <div
          v-for="project in paginatedItems"
          :key="project.title"
          class="project col-span-12 md:col-span-6 lg:col-span-4"
          data-aos="zoom-in"
          data-aos-once="true"
        >
          <!-- Card -->
          <div
            class="dialog-trigger project-card bg-white rounded-b overflow-hidden"
          >
            <!-- Screenshot -->
            <img
              class="screenshot object-cover w-full cursor-pointer"
              :src="project.images[0]"
              @click="emitShowScreenshotsEvent(project.images)"
            />

            <div class="px-5 py-2">
              <!-- Tags -->
              <div class="flex flex-wrap gap-2 my-1">
                <div
                  v-for="tag in project.tags"
                  :key="tag"
                  class="bg-gray-200 px-2 rounded text-gray-600"
                >
                  {{ tag }}
                </div>
              </div>

              <div class="flex justify-between items-center">
                <!-- Title -->
                <div
                  class="text-lg font-semibold cursor-pointer"
                  @click="emitShowScreenshotsEvent(project.images)"
                >
                  {{ project.title }}
                </div>

                <!-- Link -->
                <span class="link flex items-center space-x-1">
                  <i class="mdi mdi-github mdi-24px"></i>
                  <a
                    :href="project.link"
                    class="hover:underline"
                    target="_blank"
                    >Repository</a
                  >
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Load More Button -->
      <div class="w-max mt-6 mb-1 mx-auto cursor-pointer">
        <button
          v-if="nextPage"
          class="rounded py-1 px-4 bg-green-500 font-mono font-medium text-lg text-white uppercase focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 hover:bg-green-600"
          @click="page += 1"
        >
          Load More
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ParticlesConfig from '@/assets/particles'

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
        title: 'Vue Simple Tailwind Admin',
        tags: ['vue', 'tailwind'],
        link: 'https://github.com/karahman34/vue-simple-tailwind-admin',
        images: [
          require('@/assets/images/projects/vtail-admin/one.png'),
          require('@/assets/images/projects/vtail-admin/two.png'),
          require('@/assets/images/projects/vtail-admin/three.png')
        ]
      },
      {
        title: 'Calculator',
        tags: ['vue'],
        link: 'https://github.com/karahman34/calculator',
        images: [
          require('@/assets/images/projects/calculator/one.png'),
          require('@/assets/images/projects/calculator/two.png')
        ]
      },
      {
        title: 'Channel Chat',
        tags: ['laravel', 'vue', 'vuetify'],
        link: 'https://github.com/karahman34/channel-chat-frontend',
        images: [
          require('@/assets/images/projects/channel-chat/one.png'),
          require('@/assets/images/projects/channel-chat/two.png')
        ]
      },
      {
        title: 'Marvel',
        tags: ['vue', 'vuetify'],
        link: 'https://github.com/karahman34/marvel',
        images: [
          require('@/assets/images/projects/marvel/one.png'),
          require('@/assets/images/projects/marvel/two.png'),
          require('@/assets/images/projects/marvel/three.png'),
          require('@/assets/images/projects/marvel/four.png'),
          require('@/assets/images/projects/marvel/five.png')
        ]
      },
      {
        title: 'Forum',
        tags: ['laravel', 'vue', 'bulma'],
        link: 'https://github.com/karahman34/forum',
        images: [
          require('@/assets/images/projects/forum/one.png'),
          require('@/assets/images/projects/forum/two.png'),
          require('@/assets/images/projects/forum/three.png'),
          require('@/assets/images/projects/forum/four.png'),
          require('@/assets/images/projects/forum/five.png')
        ]
      },
      {
        title: 'Quiz App',
        tags: ['laravel', 'vue', 'tailwind'],
        link: 'https://github.com/karahman34/quiz-app',
        images: [
          require('@/assets/images/projects/quiz/one.png'),
          require('@/assets/images/projects/quiz/two.png'),
          require('@/assets/images/projects/quiz/three.png'),
          require('@/assets/images/projects/quiz/four.png'),
          require('@/assets/images/projects/quiz/five.png'),
          require('@/assets/images/projects/quiz/six.png'),
          require('@/assets/images/projects/quiz/seven.png')
        ]
      },
      {
        title: 'Tic tac toe',
        tags: ['vue'],
        link: 'https://github.com/karahman34/tic-tac-toe',
        images: [
          require('@/assets/images/projects/tic-tac-toe/one.png'),
          require('@/assets/images/projects/tic-tac-toe/two.png')
        ]
      },
      {
        title: 'Table Service',
        tags: ['laravel', 'vue', 'vuetify'],
        link: 'https://github.com/karahman34/table-service-frontend',
        images: [
          require('@/assets/images/projects/table-service/one.png'),
          require('@/assets/images/projects/table-service/two.png'),
          require('@/assets/images/projects/table-service/three.png'),
          require('@/assets/images/projects/table-service/four.png'),
          require('@/assets/images/projects/table-service/five.png'),
          require('@/assets/images/projects/table-service/six.png')
        ]
      },
      {
        title: 'Landing Pages',
        tags: ['bootstrap'],
        link: 'https://github.com/karahman34/landing-pages',
        images: [
          require('@/assets/images/projects/company-landing-page/one.png')
        ]
      },
      {
        title: 'News',
        tags: ['laravel', 'jquery', 'bootstrap', 'livewire'],
        link: 'https://github.com/karahman34/laravel-news',
        images: [
          require('@/assets/images/projects/news/one.png'),
          require('@/assets/images/projects/news/two.png'),
          require('@/assets/images/projects/news/three.png'),
          require('@/assets/images/projects/news/four.png'),
          require('@/assets/images/projects/news/five.png'),
          require('@/assets/images/projects/news/six.png'),
          require('@/assets/images/projects/news/seven.png'),
          require('@/assets/images/projects/news/eight.png'),
          require('@/assets/images/projects/news/nine.png'),
          require('@/assets/images/projects/news/ten.png')
        ]
      },
      {
        title: 'Todo List',
        tags: ['vue', 'electron js', 'tailwind'],
        link: 'https://github.com/karahman34/todo-list-vlectron',
        images: [
          require('@/assets/images/projects/todo-list/one.png'),
          require('@/assets/images/projects/todo-list/two.png'),
          require('@/assets/images/projects/todo-list/three.png')
        ]
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
    window.particlesJS('projects', ParticlesConfig)
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

  .project-card {
    transition: transform 200ms ease-in;

    &:hover {
      transform: scale(1.05);

      .link {
        max-width: 100%;
      }
    }

    .screenshot {
      min-height: 200px;
      max-height: 220px;
    }

    .link {
      overflow: hidden;
      max-width: 22px;
      transition: max-width 900ms linear;
    }
  }
}
</style>
