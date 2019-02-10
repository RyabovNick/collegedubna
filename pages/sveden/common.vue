<style>
.elevation-1 {
  max-width: 1100px;
  margin: auto;
}

.v-datatable tbody tr td {
  font-size: 14px;
}

.elevation-1 .v-datatable thead tr th {
  color: black;
  font-size: 16px;
  font-weight: bold;
}
</style>


<template>
  <v-app>
    <h1>Основные сведения</h1>
    <section v-if="errored">
      <p>Приносим извинения, произошла ошибка. Пожалуйста, повторите позднее</p>
    </section>
    <section v-else>
      <div v-if="loading">Загрузка...</div>
      <v-data-table
        :items="$store.state.common.common"
        class="elevation-1"
        hide-actions
        hide-headers
      >
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
      loading: false,
      errored: false
    }
  },
  async fetch({ store }) {
    await store.dispatch('common/fetchCommon')
  },
  computed: {
    ...mapGetters(['common'])
  }
}
</script>
