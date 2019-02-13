<style scoped>
@import '~/assets/css/markdown.css';
</style>

<template>
  <v-app>
    <vue-markdown class="md-helper">{{ $store.state.speciality.page.content }}</vue-markdown>
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
      await store.dispatch('speciality/fetchPage', '5')
    } catch {
      await store.dispatch('speciality/fetchPageErr')
    }
  },
  computed: {
    ...mapGetters(['page', 'pageErr'])
  }
}
</script>
