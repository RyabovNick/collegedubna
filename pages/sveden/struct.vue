<template>
  <v-app>
    <h1>Структура и органы управления образовательной организации</h1>
    <section v-if="errored">
      <p>Приносим извинения, произошла ошибка. Пожалуйста, повторите позднее</p>
    </section>

    <section v-else>
      <div v-if="loading">Загрузка...</div>

      <v-data-table
        :headers="headers"
        :items="$store.state.struct.struct"
        hide-actions
        class="elevation-1"
      >
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
      loading: false,
      errored: false
    }
  },
  async fetch({ store }) {
    await store.dispatch('struct/fetchStruct')
  },
  computed: {
    ...mapGetters(['struct'])
  }
}
</script>
