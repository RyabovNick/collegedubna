<style scoped>
.gallery-top {
  height: 64% !important;
  width: 75%;
}

.swiper-slide {
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
  <div v-swiper:mySwiper="swiperOption" class="gallery-top">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(banner, i) in banners" :key="i">
        <img :src="banner">
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
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
        pagination: {
          el: '.swiper-pagination'
        },
        setWrapperSize: true
        // some swiper options...
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
