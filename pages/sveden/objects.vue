<style>
table.v-table thead th {
  white-space: initial;
}
</style>


<template>
  <v-expansion-panel focusable>
    <v-expansion-panel-content v-for="item in $store.state.objects.educode" :key="item.id">
      <div slot="header" @click="createTable(item.id)">{{ item.cab_head}}</div>
      <v-card>
        <section v-if="$store.state.education.educodeErr">
          <v-alert :value="true" color="error" icon="warning" outline>{{ errMessage }}</v-alert>
        </section>
        <section v-else>
          <v-card>
            <v-card-title>
              <v-text-field
                v-model="searchEducode"
                append-icon="search"
                label="Поиск"
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>
            <v-data-table
              :headers="headersEducode"
              :items="tableItems"
              expand
              :search="searchEducode"
              class="elevation-2"
              rows-per-page-text="Записей на странице"
            >
              <template slot="items" slot-scope="props">
                <td itemprop="discipline" class="text-xs-left">{{ props.item.discipline }}</td>
                <td itemprop="cabname" class="text-xs-right">{{ props.item.cabname }}</td>
                <td itemprop="address" class="text-xs-right">{{ props.item.address }}</td>
                <td itemprop="disabled" class="text-xs-right">{{ props.item.disabled }}</td>
              </template>
            </v-data-table>
          </v-card>
        </section>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      searchEducode: '',
      headersEducode: [
        {
          text:
            'Наименование дисциплины (модуля), практик в соответствии с учебным планом',
          sortable: false,
          value: 'disciplineName'
        },
        {
          text:
            'Наименование учебных кабинетов, лабораторий, мастерских и других помещений для реализации образовательной программы',
          sortable: false,
          value: 'cabName'
        },
        {
          text:
            'Оснащенность учебных кабинетов, лабораторий, мастерских и других помещений для реализации образовательной программы',
          sortable: false,
          value: 'cabDescription'
        },
        {
          text:
            '	Приспособленность помещений для использования лицами с ограниченными возможностями здоровья',
          sortable: false,
          value: 'disabled'
        }
      ],
      tableItems: [],
      errMessage:
        'Приносим извинения, произошла ошибка при загрузке данных. Пожалуйста, повторите запрос позднее.'
    }
  },
  async fetch({ store }) {
    try {
      await store.dispatch('objects/fetchEducode')
    } catch {
      await store.dispatch('objects/fetchEducodeErr')
    }
  },
  computed: {
    ...mapGetters(['educode'])
  },
  methods: {
    async createTable(id) {
      this.tableItems = await this.$axios.$get(`/cabinets/${id}`)
    }
  }
}
</script>
