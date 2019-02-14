<style scoped>
table.v-table {
  width: auto;
  margin: auto;
  max-width: 100%;
}

.v-input__slot {
  max-width: max-content;
  margin: auto;
}

.v-card .v-card__title .v-input {
  max-width: 500px;
  margin: auto;
}

h2 {
  text-align: center;
}
</style>

<style>
table.v-table thead th {
  white-space: initial;
}
</style>

<template>
  <v-app>
    <h1>Вакантные места</h1>
    <section v-if="vacantErr">
      <v-alert :value="true" color="error" icon="warning" outline>{{ errMessage }}</v-alert>
    </section>
    <section v-else>
      <div v-if="loading">Загрузка...</div>
      <v-card>
        <v-card-title>
          <v-text-field
            v-model="search"
            append-icon="search"
            label="Поиск"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="vacant"
          expand
          :search="search"
          class="elevation-2"
        >
          <template slot="headers" slot-scope="props">
            <tr>
              <th
                v-for="header in props.headers"
                :key="header.text"
                :rowspan="header.rowspan"
                :colspan="header.colspan"
              >{{ header.text }}</th>
            </tr>
            <tr>
              <th
                v-for="header in headers2"
                :key="header.text"
                :rowspan="header.rowspan"
                :colspan="header.colspan"
              >{{ header.text }}</th>
            </tr>
          </template>
          <template slot="items" slot-scope="props">
            <td itemprop="eduCode" class="text-xs-left">{{ props.item.code }}</td>
            <td itemprop="eduName" class="text-xs-right">{{ props.item.name }}</td>
            <td itemprop="eduLevel" class="text-xs-right">{{ props.item.level }}</td>
            <td itemprop="eduCourse" class="text-xs-right">{{ props.item.course }}</td>
            <td itemprop="eduForm" class="text-xs-right">{{ props.item.form }}</td>
            <td itemprop="numberBFVacant" class="text-xs-right">{{ props.item.numberBFVacant }}</td>
            <td itemprop="numberBRVacant" class="text-xs-right">{{ props.item.numberBRVacant }}</td>
            <td itemprop="numberBMVacant" class="text-xs-right">{{ props.item.numberBMVacant }}</td>
            <td itemprop="numberPVacant" class="text-xs-right">{{ props.item.numberPVacant }}</td>
          </template>
        </v-data-table>
      </v-card>
    </section>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      search: '',
      headers: [
        {
          text: 'Код программы',
          align: 'left',
          sortable: false,
          value: 'code',
          rowspan: 2,
          colspan: 1
        },
        {
          text: 'Название программы',
          sortable: false,
          value: 'name',
          rowspan: 2,
          colspan: 1
        },
        {
          text: 'Уровень образования',
          sortable: false,
          value: 'level',
          rowspan: 2,
          colspan: 1
        },
        {
          text: 'Курс',
          sortable: false,
          value: 'course',
          rowspan: 2,
          colspan: 1
        },
        {
          text: 'Форма обучения',
          sortable: false,
          value: 'form',
          rowspan: 2,
          colspan: 1
        },
        {
          text:
            'Количество вакантных мест для приема (перевода) на места, финансируемые за счет',
          sortable: false,
          value: 'places',
          rowspan: 1,
          colspan: 4
        }
      ],
      headers2: [
        {
          text: 'бюджетных ассигнований федерального бюджета',
          sortable: false,
          value: 'numberBFVacant',
          rowspan: 1,
          colspan: 1
        },
        {
          text: 'бюджетов субъектов Российской Федерации',
          sortable: false,
          value: 'numberBRVacant',
          rowspan: 1,
          colspan: 1
        },
        {
          text: 'местных бюджетов',
          sortable: false,
          value: 'numberBMVacant',
          rowspan: 1,
          colspan: 1
        },
        {
          text:
            'по договорам об образовании за счет средств физических и (или) юридических лиц',
          sortable: false,
          value: 'numberPVacant',
          rowspan: 1,
          colspan: 1
        }
      ],
      loading: false
    }
  },
  async fetch({ store }) {
    try {
      await store.dispatch('vacant/fetchVacant')
    } catch {
      await store.dispatch('vacant/fetchVacantErr')
    }
  },
  computed: {
    ...mapGetters({
      vacant: 'vacant/vacant',
      vacantErr: 'vacant/vacantErr',
      errMessage: 'helpers/errMessage'
    })
  }
}
</script>
