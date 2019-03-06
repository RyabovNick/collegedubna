<style scoped>
.theme--light.v-btn {
  color: #ffffff;
}
</style>


<template>
  <v-app>
    <main-gallery></main-gallery>
    <h1>Новостная лента</h1>
    <news></news>
    <v-btn nuxt :to="link" depressed large color="rgb(21, 101, 192)" class="v-btn--size">{{ msg }}</v-btn>
  </v-app>
</template>

<script>
import News from '../components/News'
import MainGallery from '../components/GalleryMain'

export default {
  data() {
    return {
      link: '/news/page/1',
      msg: 'Архив новостей'
    }
  },
  components: {
    News,
    MainGallery
  }
}
</script>
