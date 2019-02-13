<style scoped>
@import '~/assets/css/markdown.css';
</style>

<template>
  <v-app>
    <section v-if="$store.state.speciality.pageErr">
      <v-alert
        :value="true"
        color="error"
        icon="warning"
        outline
      >{{ $store.state.helpers.errMessage }}</v-alert>
    </section>
    <section v-else>
      <vue-markdown class="md-helper">{{ $store.state.speciality.page.content }}</vue-markdown>
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
    try {
      await store.dispatch('speciality/fetchPage', '2')
    } catch {
      await store.dispatch('speciality/fetchPageErr')
    }
  },
  computed: {
    ...mapGetters(['page', 'pageErr', 'errMessage'])
  }
}
</script>
