<style scoped>
@import '~/assets/css/markdown.css';

.md-helper >>> p {
  margin-bottom: 1em;
}
</style>

<template>
  <v-app>
    <section v-if="aboutErr">
      <v-alert :value="true" color="error" icon="warning" outline>{{ errMessage }}</v-alert>
    </section>
    <section v-else>
      <vue-markdown class="md-helper">{{ about.content }}</vue-markdown>
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
      await store.dispatch('about/fetchAbout', '3')
    } catch {
      await store.dispatch('about/fetchAboutErr')
    }
  },
  computed: {
    ...mapGetters({
      about: 'about/about',
      aboutErr: 'about/aboutErr',
      errMessage: 'helpers/errMessage'
    })
  }
}
</script>
