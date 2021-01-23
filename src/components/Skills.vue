<template>
  <div id="skills" class="background-secondary py-6">
    <div class="container">
      <div class="header-context">Skills</div>

      <div class="flex justify-center flex-wrap gap-y-5 w-full">
        <div
          v-for="skill in skills"
          :key="skill.text"
          class="flex flex-col items-center w-4/12 lg:w-1/4"
          data-aos="zoom-in"
          data-aos-once="true"
          data-aos-delay="200"
        >
          <span
            class="text-gray-400 text-6xl md:text-8xl"
            :class="skill.icon"
          ></span>
          <p class="mb-0 font-medium font-mono text-lg md:text-xl">
            {{ skill.text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        {
          icon: 'mdi mdi-language-html5 hover:text-yellow-600',
          text: 'HTML5'
        },
        {
          icon: 'mdi mdi-language-css3 hover:text-blue-400',
          text: 'CSS3'
        },
        {
          icon: 'mdi mdi-language-javascript hover:text-yellow-300',
          text: 'Javascript'
        },
        {
          icon: 'mdi mdi-language-php hover:text-blue-500',
          text: 'PHP'
        },
        {
          icon: 'mdi mdi-database hover:text-yellow-400',
          text: 'SQL'
        },
        {
          icon: 'mdi mdi-laravel hover:text-red-500',
          text: 'Laravel'
        },
        {
          icon: 'mdi mdi-vuejs hover:text-green-500',
          text: 'Vue'
        },
        {
          icon: 'mdi mdi-vuetify hover:text-blue-400',
          text: 'Vuetify'
        },
        {
          icon: 'mdi mdi-bootstrap hover:text-indigo-600',
          text: 'Bootstrap'
        },
        {
          icon: 'mdi mdi-bulma hover:text-green-300',
          text: 'Bulma'
        },
        {
          icon: 'mdi mdi-tailwind hover:text-blue-400',
          text: 'Tailwind'
        },
        {
          icon: 'mdi mdi-nodejs hover:text-green-500',
          text: 'Node JS'
        }
      ]
    }
  }
}
</script>
