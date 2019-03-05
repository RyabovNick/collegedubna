<style scoped>
@import '~/assets/css/markdown.css';
</style>

<template>
  <v-app>
    <section v-if="$store.state.socialsupport.pageErr">
      <v-alert
        :value="true"
        color="error"
        icon="warning"
        outline
      >{{ $store.state.helpers.errMessage }}</v-alert>
    </section>
    <section v-else>
      <vue-markdown class="md-helper">{{ $store.state.socialsupport.page.content }}</vue-markdown>
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
  async fetch({ store }) {
    store.dispatch('socialsupport/setErrorsToFalse')
    try {
      await store.dispatch('socialsupport/fetchPage', '5')
    } catch {
      await store.commit('socialsupport/setPageErr', true)
    }
  },
  computed: {
    ...mapGetters(['page', 'pageErr', 'errMessage'])
  }
}
</script>
