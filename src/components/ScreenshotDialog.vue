<template>
  <the-dialog @hide="$emit('hide')">
    <!-- Active Image -->
    <img class="active-image" :src="activeImage" alt="Project Screenshot" />

    <!-- List of screenshots -->
    <div
      class="container fixed bottom-4 pb-1 flex gap-x-2 overflow-x-auto md:pb-0 md:justify-center lg:gap-x-4"
    >
      <div v-for="(image, i) in images" :key="image" class="flex-shrink-0">
        <!-- List Image -->
        <img
          :src="image"
          class="list-image-item cursor-pointer object-cover"
          alt="List Image"
          @click="activeIndex = i"
        />

        <!-- Active Indicator -->
        <div v-if="i === activeIndex" class="active-indicator"></div>
      </div>
    </div>
  </the-dialog>
</template>

<script>
import TheDialog from '@/components/Dialog'

export default {
  components: {
    TheDialog
  },

  props: {
    images: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      activeIndex: 0
    }
  },

  computed: {
    activeImage() {
      return this.images[this.activeIndex]
    }
  }
}
</script>

<style lang="scss" scoped>
.active-image {
  object-fit: contain;
  width: 95%;
  height: auto;
}

@media screen and (min-width: 1024px) {
  .active-image {
    width: 70%;
    height: 70%;
  }
}

.list-image-item {
  width: 100px;
  height: 100px;
}

.active-indicator {
  margin-top: 5px;
  height: 4px;
  background-color: var(--primary-color);
}
</style>
