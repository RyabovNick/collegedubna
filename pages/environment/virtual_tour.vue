<style scoped>
.gallery-top {
  height: 64% !important;
  width: 75%;
}

.gallery-thumbs {
  height: 20% !important;
  box-sizing: border-box;
  padding: 10px 0;
}

.gallery-thumbs .swiper-thumbs {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}

img {
  height: inherit;
  max-height: 500px;
  display: block;
  margin-left: auto;
  margin-right: auto;
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
    <div v-swiper:myThumbSwiper="swiperOptionThumbs" class="gallery-thumbs">
      <div class="swiper-wrapper">
        <div class="swiper-thumbs" v-for="(banner, i) in banners" :key="i">
          <img :src="banner">
        </div>
      </div>
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
        '/environment/virtual_tour/3.jpg'
      ],
      swiperOption: {
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        },
        setWrapperSize: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
        // some swiper options...
      },
      swiperOptionThumbs: {
        spaceBetween: 10,
        slidesPerView: 4,
        touchRatio: 0.2,
        loop: true,
        loopedSlides: 5, // looped slides should be the same
        slideToClickedSlide: true
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.banners.push('/environment/virtual_tour/4.jpg')
      console.log('banners update')
    }, 3000)
    console.log(
      'This is current swiper instance object',
      this.mySwiper,
      'It will slideTo banners 3'
    )
    this.mySwiper.slideTo(3, 1000, false)
  }
}
</script>
