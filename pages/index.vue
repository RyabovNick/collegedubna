<template>
  <v-app>
    <main-gallery></main-gallery>
    <h1>Новостная лента</h1>
    <news></news>
  </v-app>
</template>

<script>
import News from '../components/News'
import MainGallery from '../components/GalleryMain'

export default {
  components: {
    News,
    MainGallery
  }
}
</script>
