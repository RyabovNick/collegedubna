<style scoped>
@import '~/assets/css/markdown.css';
</style>

<template>
  <v-app>
    <section v-if="page[pageId].err">
      <v-alert
        :value="true"
        color="error"
        icon="warning"
        outline
      >{{ $store.state.helpers.errMessage }}</v-alert>
    </section>
    <section v-else>
      <vue-markdown class="md-helper">{{ page[pageId].content }}</vue-markdown>
    </section>
  </v-app>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      pageId: 14
    }
  },
  components: {
    VueMarkdown
  },
  async fetch({ store }) {
    // fetch can't get this so we need pageId in two places(
    const pageId = 14
    store.dispatch('pages/setErrorsToFalse', pageId)
    try {
      await store.dispatch('pages/fetchPage', pageId)
    } catch {
      await store.commit('pages/setPageErr', { id: pageId, value: true })
    }
  },
  computed: {
    ...mapGetters({ page: 'pages/page' })
  }
}
</script>
