<template>
  <div class="modal fixed top-0 left-0 z-50 w-screen h-screen">
    <!-- Background -->
    <div
      class="modal-background fixed top-0 left-0 h-full w-full bg-gray-800 bg-opacity-75"
      @click="emitHideEvent"
    ></div>

    <!-- Content -->
    <div
      ref="modalContent"
      class="modal-content fixed w-full h-full px-3 py-3 flex items-center justify-center"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    document.addEventListener('click', this.clickOutsideHandler)
  },

  methods: {
    emitHideEvent() {
      return this.$emit('hide')
    },
    clickOutsideHandler(e) {
      const dialogTrigger = document.querySelectorAll('.dialog-trigger')
      const excluded = [
        ...dialogTrigger,
        ...this.$refs.modalContent.querySelectorAll('*')
      ]

      for (let i = 0; i < dialogTrigger.length; i++) {
        const el = dialogTrigger[i]
        excluded.push(...el.querySelectorAll('*'))
      }

      const target = e.target
      for (let i = 0; i < excluded.length; i++) {
        const el = excluded[i]

        if (el.isSameNode(target)) {
          return false
        }
      }

      this.emitHideEvent()
    }
  },

  beforeDestroy() {
    document.removeEventListener('click', this.clickOutsideHandler)
  }
}
</script>
