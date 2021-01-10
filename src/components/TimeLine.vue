<template>
  <div class="timeline-area">
    <!-- Items -->
    <div
      v-for="item in items"
      :key="item"
      class="timeline-item text-gray-800 font-medium text-base md:text-lg"
    >
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        'SD Swadaya Bandung (2007 - 2013)',
        'SMP Swadaya 1 Bandung (2013 - 2016)',
        'SMK Prakarya Internasional (2016 - 2019)'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.timeline-area {
  position: relative;
  border-left: 5px solid rgb(31, 45, 65);

  .timeline-item {
    margin: 1.4rem 0;
    margin-left: 2rem;
    line-height: 20px;

    &::before {
      margin-top: 0px;
      content: '';
      display: block;
      position: absolute;
      left: -10px;
      width: 16px;
      height: 16px;
      border: 3px solid rgb(31, 45, 65);
      border-radius: 50%;
      background-color: #f3f3f3;
    }
  }
}
</style>
