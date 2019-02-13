<template>
  <v-container class="scoped-helper" v-html="$store.state.page.page.content"></v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  async fetch({ store }) {
    try {
      await store.dispatch('page/fetchPage', '1')
    } catch {
      await store.dispatch('page/fetchPageErr')
    }
  },
  computed: {
    ...mapGetters(['page', 'pageErr'])
  }
}
</script>
