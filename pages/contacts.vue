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
    <section v-if="contactsErr">
      <v-alert :value="true" color="error" icon="warning" outline>{{ errMessage }}</v-alert>
    </section>
    <section v-else>
      <vue-markdown class="md-helper">{{ contacts.content }}</vue-markdown>
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
      await store.dispatch('contacts/fetchContacts', '4')
    } catch {
      await store.dispatch('contacts/fetchContactsErr')
    }
  },
  computed: {
    ...mapGetters({
      contacts: 'contacts/contacts',
      contactsErr: 'contacts/contactsErr',
      errMessage: 'helpers/errMessage'
    })
  }
}
</script>
