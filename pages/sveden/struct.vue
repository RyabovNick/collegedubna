<template>
  <v-app>
    <h1>Структура и органы управления образовательной организации</h1>
    <section v-if="structErr">
      <v-alert :value="true" color="error" icon="warning" outline>{{ errMessage }}</v-alert>
    </section>

    <section v-else>
      <div v-if="loading">Загрузка...</div>

      <v-data-table :headers="headers" :items="struct" hide-actions class="elevation-1">
        <template slot="items" slot-scope="props">
          <td itemprop="fio" class="text-xs-left">{{ props.item.fio }}</td>
          <td itemprop="post" class="text-xs-right">{{ props.item.post }}</td>
          <td itemprop="telephone" class="text-xs-right">{{ props.item.telephone }}</td>
          <td itemprop="email" class="text-xs-right">
            <a :href="`mailto:${props.item.email}`">{{ props.item.email }}</a>
          </td>
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
      headers: [
        {
          text: 'ФИО',
          align: 'left',
          sortable: false,
          value: 'fio'
        },
        { text: 'Должность', sortable: false, value: 'post' },
        { text: 'Телефон', sortable: false, value: 'telephone' },
        { text: 'Почта', sortable: false, value: 'email' }
      ],
      loading: false
    }
  },
  async fetch({ store }) {
    try {
      await store.dispatch('struct/fetchStruct')
    } catch {
      await store.dispatch('struct/fetchStructErr')
    }
  },
  computed: {
    ...mapGetters({
      struct: 'struct/struct',
      structErr: 'struct/structErr',
      errMessage: 'helpers/errMessage'
    })
  }
}
</script>
