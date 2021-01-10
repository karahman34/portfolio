<template>
  <div id="about" class="background-gray py-6">
    <div
      class="container flex items-center flex-col gap-5 lg:flex-row lg:justify-center lg:items-start"
    >
      <!-- About Me -->
      <div
        class="lg:w-1/2"
        data-aos="fade-right"
        data-aos-delay="100"
        data-aos-once="true"
        data-aos-duration="850"
      >
        <div class="header-context">About Me</div>

        <!-- Avatar -->
        <img class="avatar mx-auto" src="@/assets/avatar.jpeg" />

        <!-- Greeting -->
        <div
          class="mt-2 italic md:text-lg text-gray-700 font-medium break-words"
        >
          My name is <b>Jaka Rahman Hidayat</b>, a man who always puts
          simplicity on top of everything.Living in Bandung, Indonesia and start
          to play computer since the high school and fall in love since that.
        </div>
      </div>

      <!-- Education -->
      <div
        class="lg:w-1/2"
        data-aos="fade-left"
        data-aos-delay="100"
        data-aos-once="true"
        data-aos-duration="850"
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
  width: 130px;
  height: 130px;
  border-radius: 50%;
  object-fit: cover;
  filter: grayscale(60%);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  @media screen and (min-width: 640px) {
    & {
      width: 170px;
      height: 170px;
    }
  }
}
</style>
