<style scoped>
@import '~/assets/css/markdown.css';

.md-helper >>> p {
  margin-bottom: 1em;
}
</style>

<template>
  <v-app>
    <vue-markdown class="md-helper">{{ $store.state.about.page.content }}</vue-markdown>
  </v-app>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import { mapGetters } from 'vuex'

export default {
  components: {
    VueMarkdown
  },
  async fetch({ store }) {
    try {
      await store.dispatch('about/fetchPage', '3')
    } catch {
      await store.dispatch('about/fetchPageErr')
    }
  },
  computed: {
    ...mapGetters(['page', 'pageErr'])
  }
}
</script>
