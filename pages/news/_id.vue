<style>
section .warning {
  background-color: #fb8c00 !important;
}
</style>

<style scoped>
@import '~/assets/css/markdown.css';

.gallery-top {
  height: 500px;
  width: 100%;
  padding-top: 2em;
}

.swiper-slide {
  display: flex;
}

img {
  max-height: 470px;
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
    <section v-if="newsErr">
      <v-alert
        :value="true"
        color="error"
        icon="warning"
        outline
      >{{ errMessage }}</v-alert>
    </section>
    <section v-else-if="newsDoesNotExist">
      <v-alert :value="true" type="warning">{{ newsDoesnotExist }}</v-alert>
    </section>
    <section v-else>
      <h1>{{news.title}}</h1>
      <vue-markdown class="md-helper">{{news.content}}</vue-markdown>
      <div
        v-if="newsPhotos.length !== 0"
        v-swiper:mySwiper="swiperOption"
        class="gallery-top"
      >
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(photo, i) in newsPhotos" :key="i">
            <img :src="`/files/${photo.link}`">
          </div>
        </div>
        <div class="swiper-button-next swiper-button" slot="button-next"></div>
        <div class="swiper-button-prev swiper-button" slot="button-prev"></div>
        <div class="swiper-pagination" slot="pagination"></div>
      </div>
    </section>
  </v-app>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import { mapGetters } from 'vuex'

export default {
  components: {
    VueMarkdown
  },
  data() {
    return {
      newsDoesnotExist: 'К сожалению, заданной новости не существует.',
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
      errMessage: 'helpers/errMessage'
    })
  }
}
</script>
