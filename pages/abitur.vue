<style scoped>
@import '~/assets/css/markdown.css';
</style>

<template>
  <v-app>
    <section v-if="abiturErr">
      <v-alert :value="true" color="error" icon="warning" outline>{{ errMessage }}</v-alert>
    </section>
    <section v-else>
      <vue-markdown class="md-helper">{{ abitur.content }}</vue-markdown>
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
    store.dispatch('abitur/setErrorsToFalse')
    try {
      await store.dispatch('abitur/fetchAbitur', '1')
    } catch {
      await store.commit('abitur/setAbiturErr', true)
    }
  },
  computed: {
    ...mapGetters({
      abitur: 'abitur/abitur',
      abiturErr: 'abitur/abiturErr',
      errMessage: 'helpers/errMessage'
    })
  }
}
</script>
