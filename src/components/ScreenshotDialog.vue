<template>
  <the-dialog :value="value" @input="$emit('input', false)">
    <!-- Active Image -->
    <img
      :src="activeImage"
      :alt="activeImage"
      class="active-image block w-max object-contain lg:mb-28 lg:max-w-5xl xl:max-w-6xl"
    />

    <!-- List Another Images -->
    <div
      class="list-image-content absolute bottom-4 flex items-center overflow-x-auto max-w-screen-sm md:max-w-screen-md lg:max-w-5xl xl:max-w-6xl md:bottom-8"
    >
      <div
        v-for="(image, i) in images"
        :key="i"
        class="list-image-item flex-shrink-0 cursor-pointer inline-block px-2"
        :class="{ active: i === activeIndex }"
        @click="activeIndex = i"
      >
        <img :src="image" :alt="image" class="object-cover" />
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
    value: {
      type: Boolean,
      required: true
    },
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
  },

  watch: {
    value() {
      this.activeIndex = 0
    }
  }
}
</script>

<style lang="scss" scoped>
.active-image {
  max-height: 640px;
}

.list-image-content {
  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--primary-color);
    border-radius: 0.25rem;
    border: 1px solid rgba(0, 0, 0, 0.4);
  }

  .list-image-item {
    img {
      width: 140px;
      height: 100px;

      @media screen and (min-width: 1024px) {
        & {
          width: 180px;
          height: 120px;
        }
      }
    }

    &.active {
      margin-bottom: calc(5px + 0.5rem);

      &::before {
        content: '';
        display: block;
        height: 5px;
        width: 25%;
        border-radius: 10px;
        margin: 0 auto;
        margin-bottom: 0.5rem;
        background-color: var(--primary-color);
      }
    }
  }
}
</style>
