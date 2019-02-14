<style>
section .warning {
  background-color: #fb8c00 !important;
}
</style>

<style scoped>
@import '~/assets/css/markdown.css';
</style>


<template>
  <v-app>
    <section v-if="newsErr">
      <v-alert :value="true" color="error" icon="warning" outline>{{ errMessage }}</v-alert>
    </section>
    <section v-else-if="newsDoesNotExist">
      <v-alert :value="true" type="warning">{{ newsDoesnotExist }}</v-alert>
    </section>
    <section v-else>
      <h1>{{news.title}}</h1>
      <vue-markdown class="md-helper">{{news.content}}</vue-markdown>
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
      newsDoesnotExist: 'К сожалению, заданной новости не существует.'
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
      newsErr: 'news/newsErr',
      newsDoesNotExist: 'news/newsDoesNotExist',
      errMessage: 'helpers/errMessage'
    })
  }
}
</script>
