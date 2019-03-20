<style>
section .warning {
  background-color: #fb8c00 !important;
}
</style>

<style scoped>
@import '~/assets/css/markdown.css';

.gallery-top {
  height: 41%;
  width: 100%;
}

.swiper-slide {
  display: flex;
}

img {
  max-height: 500px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>


<template>
  <v-app :style="{background: backgroundColor}">
    <section v-if="newsErr">
      <v-alert :value="true" color="error" icon="warning" outline>{{ errMessage }}</v-alert>
    </section>
    <section v-else-if="newsDoesNotExist">
      <v-alert :value="true" type="warning">{{ newsDoesnotExist }}</v-alert>
    </section>
    <section v-else>
      <h1
        :style="{fontSize: (15 + fontSize) + 'px',
                      color: color,
                      'font-family': fontFamily,
                      'letter-spacing': letterSpacing + 'px',
                      'font-weight': fontWeight}"
      >{{news.title}}</h1>
      <vue-markdown
        class="md-helper"
        :style="{fontSize: fontSize + 'px',
                      color: color,
                      'font-family': fontFamily,
                      'letter-spacing': letterSpacing + 'px',
                      'font-weight': fontWeight}"
      >{{news.content}}</vue-markdown>
    </section>
  </v-app>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import { mapGetters } from 'vuex'

export default {
  layout: 'special',
  components: {
    VueMarkdown
  },
  data() {
    return {
      newsDoesnotExist: 'К сожалению, заданной новости не существует.',
      swiperOption: {
        loop: false,
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
  async fetch({ store, params }) {
    try {
      await store.dispatch('news/fetchNews', params.id)
    } catch {
      await store.dispatch('news/fetchNewsErr')
    }
  },
  computed: {
    ...mapGetters({
      news: 'news/news',
      newsPhotos: 'news/newsPhotos',
      newsErr: 'news/newsErr',
      newsDoesNotExist: 'news/newsDoesNotExist',
      errMessage: 'helpers/errMessage',
      fontSize: 'special/fontSize',
      color: 'special/color',
      backgroundColor: 'special/backgroundColor',
      fontFamily: 'special/fontFamily',
      letterSpacing: 'special/letterSpacing',
      fontWeight: 'special/fontWeight'
    })
  }
}
</script>
