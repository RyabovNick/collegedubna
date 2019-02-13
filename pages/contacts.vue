<style scoped>
@import '~/assets/css/markdown.css';

.md-helper {
  margin-bottom: 2em;
}
.md-helper >>> p {
  text-align: center;
  line-height: 2.1;
}
</style>

<template>
  <v-app>
    <vue-markdown class="md-helper">{{ $store.state.contacts.page.content }}</vue-markdown>
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
      await store.dispatch('contacts/fetchPage', '4')
    } catch {
      await store.dispatch('contacts/fetchPageErr')
    }
  },
  computed: {
    ...mapGetters(['page', 'pageErr'])
  }
}
</script>
