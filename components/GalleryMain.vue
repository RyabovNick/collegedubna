<style scoped>
.swiper-inner {
  width: 1000px;
  height: 400px;
  padding-top: 50px;
  padding-bottom: 50px;
}
.swiper-slide {
  background-size: cover;
  width: 400px;
  height: 400px;
}

img {
  height: inherit;
}

.container {
  height: 0px;
}
</style>

<template>
  <v-container>
    <div v-swiper:mySwiper="swiperOption" class="gallery-top">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(banner, i) in banners" :key="i">
          <img :src="banner">
        </div>
      </div>
      <div class="swiper-pagination" slot="pagination"></div>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        },
        pagination: {
          el: '.swiper-pagination'
        }
      },
      banners: [
        '/carousel/1.jpg',
        '/carousel/2.jpg',
        '/carousel/3.jpg',
        '/carousel/4.jpg',
        '/carousel/5.jpg',
        '/carousel/6.jpg',
        '/carousel/7.jpg',
        '/carousel/8.jpg'
      ]
    }
  }
}
</script>
