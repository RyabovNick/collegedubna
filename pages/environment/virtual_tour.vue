<style scoped>
.gallery-top {
  height: 75%;
  width: 100%;
}

.swiper-slide {
  display: flex;
}

img {
  max-height: 500px;
  display: block;
  max-width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
</style>

<template>
  <v-app>
    <div v-swiper:mySwiper="swiperOption" class="gallery-top">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(banner, i) in banners" :key="i">
          <img :src="banner">
        </div>
      </div>
      <div class="swiper-button-next swiper-button" slot="button-next"></div>
      <div class="swiper-button-prev swiper-button" slot="button-prev"></div>
      <div class="swiper-pagination" slot="pagination"></div>
    </div>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      banners: [
        '/environment/virtual_tour/1.jpg',
        '/environment/virtual_tour/2.jpg',
        '/environment/virtual_tour/3.jpg',
        '/environment/virtual_tour/4.jpg',
        '/environment/virtual_tour/5.jpg',
        '/environment/virtual_tour/6.jpg'
      ],
      swiperOption: {
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        spaceBetween: 150,
        autoHeight: true,
        grabCursor: true
      }
    }
  },
  mounted() {}
}
</script>
