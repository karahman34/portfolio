<template>
  <div id="about" class="background-gray py-6">
    <div
      class="container overflow-x-hidden flex items-center flex-col gap-5 md:overflow-x-visible lg:flex-row lg:justify-center lg:items-start"
    >
      <!-- About Me -->
      <div
        class="mx-auto lg:w-1/2"
        data-aos="fade-right"
        data-aos-delay="100"
        data-aos-once="true"
        data-aos-duration="600"
      >
        <div class="header-context">About Me</div>

        <div class="flex flex-col space-y-3 items-center space-x-5 md:flex-row">
          <!-- Avatar -->
          <img
            class="flex-shrink-0 avatar mx-auto"
            src="@/assets/images/avatar.jpeg"
          />

          <!-- Greeting -->
          <div class="md:text-lg text-gray-800 font-medium break-words">
            My name is <b>Jaka Rahman Hidayat</b>, a man who always puts
            simplicity on top of everything.Living in Bandung, Indonesia and
            start to play computer since the high school and fall in love since
            that.
          </div>
        </div>
      </div>

      <!-- Education -->
      <div
        class="mx-auto lg:w-1/2"
        data-aos="fade-left"
        data-aos-delay="100"
        data-aos-once="true"
        data-aos-duration="600"
      >
        <div class="header-context">Education</div>

        <!-- Time Line -->
        <div class="flex justify-center">
          <time-line></time-line>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TimeLine from '@/components/TimeLine'

export default {
  components: {
    TimeLine
  }
}
</script>

<style lang="scss" scoped>
.avatar {
  width: 135px;
  height: 135px;
  border-radius: 50%;
  object-fit: cover;
  filter: grayscale(50%);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);

  @media screen and (min-width: 640px) {
    & {
      width: 160px;
      height: 160px;
    }
  }
}
</style>
