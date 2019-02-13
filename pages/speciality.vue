<style scoped>
@import '~/assets/css/markdown.css';
</style>

<template>
  <v-app>
    <vue-markdown class="md-helper" :source="$store.state.page.page.content"/>
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
      await store.dispatch('page/fetchPage', '5')
    } catch {
      await store.dispatch('page/fetchPageErr')
    }
  },
  computed: {
    ...mapGetters(['page', 'pageErr'])
  }
}
</script>
