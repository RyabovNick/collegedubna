<style scoped>
.nuxt-link {
  display: contents;
}
</style>

<template>
  <v-app>
    <h1>Паспорт доступности</h1>
    <section v-if="environmentErr">
      <v-alert :value="true" color="error" icon="warning" outline>{{ errMessage }}</v-alert>
    </section>
    <section v-else class="text-xs-center" v-for="(env, i) in environment" :key="i">
      <nuxt-link v-if="env.type === 1" :to="env.link" class="nuxt-link">
        <link-button :msg="env.link_name"/>
      </nuxt-link>
      <link-button v-else :link="env.link" :msg="env.link_name"/>
    </section>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
import LinkButton from '../../../components/LinkButton'

export default {
  components: {
    LinkButton
  },
  async fetch({ store }) {
    const pageId = 7
    store.dispatch('environment/setErrorsToFalse')
    try {
      await store.dispatch('environment/fetchEnvironment', pageId)
    } catch {
      await store.commit('environment/setEnvironmentErr', true)
    }
  },
  computed: {
    ...mapGetters({
      environment: 'environment/environment',
      environmentErr: 'environment/environmentErr',
      errMessage: 'helpers/errMessage'
    })
  }
}
</script>
