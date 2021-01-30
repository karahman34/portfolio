<template>
  <div
    class="dialog fixed top-0 left-0 z-50 w-screen h-screen bg-gray-800 bg-opacity-75"
    :class="{ hidden: !value }"
  >
    <!-- Content -->
    <div
      class="dialog-content fixed w-full h-full px-3 py-3 flex items-center justify-center z-50"
    >
      <!-- Slot -->
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: true
    }
  },

  watch: {
    value: {
      immediate: true,
      handler(val) {
        this.toggleBackgroundScroll()

        val === true ? this.listenClick() : this.removeListenClick()
      }
    }
  },

  methods: {
    emitInputEvent(val) {
      this.$emit('input', val)
    },
    toggleBackgroundScroll() {
      const body = document.body
      const previousBodyHeight = body.style.height
      const paddingValue = window.innerWidth >= 768 ? 18 : 0

      if (this.value) {
        body.style.height = '100vh'
        body.style.overflowY = 'hidden'
        body.style.paddingRight = paddingValue + 'px'
      } else {
        body.style.height = previousBodyHeight
        body.style.overflowY = 'visible'
        body.style.paddingRight = null
      }
    },
    clickHandler(e) {
      const target = e.target
      if (target.classList.contains('dialog-content')) {
        const targetDialog = target.closest('.dialog')
        if (this.$el.isSameNode(targetDialog)) {
          this.emitInputEvent(false)
        }
      }
    },
    listenClick() {
      document.addEventListener('click', this.clickHandler)
    },
    removeListenClick() {
      document.removeEventListener('click', this.clickHandler)
    }
  },

  beforeDestroy() {
    this.removeListenClick()
  }
}
</script>
