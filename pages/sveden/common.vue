<template>
  <v-app>
    <h1>Основные сведения</h1>
    <section v-if="commonErr">
      <v-alert :value="true" color="error" icon="warning" outline>{{ errMessage }}</v-alert>
    </section>
    <section v-else>
      <div v-if="loading">Загрузка...</div>
      <v-data-table :items="common" class="elevation-1" hide-actions hide-headers>
        <template slot="items" slot-scope="props">
          <td>{{ props.item.name }}</td>
          <td class="text-xs-right" :itemprop="`${props.item.tag}`">{{ props.item.value }}</td>
        </template>
      </v-data-table>
    </section>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      loading: false
    }
  },
  async fetch({ store }) {
    store.dispatch('common/setErrorsToFalse')
    try {
      await store.dispatch('common/fetchCommon')
    } catch {
      await store.commit('common/setCommonErr', true)
    }
  },
  computed: {
    ...mapGetters({
      common: 'common/common',
      commonErr: 'common/commonErr',
      errMessage: 'helpers/errMessage'
    })
  }
}
</script>
