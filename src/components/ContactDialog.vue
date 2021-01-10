<template>
  <the-dialog @hide="$emit('hide')">
    <div class="bg-white rounded px-6 py-6 w-full lg:w-1/2 xl:3/12">
      <!-- Header -->
      <div
        class="mb-4 mx-auto w-max text-3xl font-mono text-gray-800 text-center header-text"
      >
        Contact
      </div>

      <div
        class="flex items-center justify-around flex-col gap-5 md:gap-0 md:flex-row"
      >
        <!-- List of contacts -->
        <div
          v-for="contact in contacts"
          :key="contact.text"
          class="flex flex-col"
        >
          <span
            class="text-6xl text-gray-800 text-center lg:text-8xl"
            :class="contact.icon"
          ></span>
          <span class="text-lg text-gray-800 lg:text-xl">{{
            contact.text
          }}</span>
        </div>
      </div>
    </div>
  </the-dialog>
</template>

<script>
import TheDialog from './Dialog'

export default {
  components: {
    TheDialog
  },

  data() {
    return {
      contacts: [
        {
          icon: 'mdi mdi-email',
          text: 'jakarahman18@gmail.com'
        },
        {
          icon: 'mdi mdi-phone',
          text: '0857-9552-8652'
        },
        {
          icon: 'mdi mdi-github',
          text: 'github.com/karahman34'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.header-text {
  &::after {
    content: '';
    display: block;
    height: 4px;
    background-color: var(--primary-color);
  }
}
</style>
