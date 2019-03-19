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

.pointer td {
  cursor: pointer;
}
</style>

<template>
  <v-app>
    <h1>Руководство</h1>
    <section v-if="structErr">
      <v-alert :value="true" color="error" icon="warning" outline>{{ errMessage }}</v-alert>
    </section>

    <section v-else>
      <div v-if="loading">Загрузка...</div>

      <v-data-table :headers="headersHeads" :items="struct" hide-actions class="elevation-1">
        <template slot="items" slot-scope="props">
          <td itemprop="fio" class="text-xs-left">{{ props.item.fio }}</td>
          <td itemprop="post" class="text-xs-center">{{ props.item.post }}</td>
          <td itemprop="telephone" class="text-xs-center">{{ props.item.telephone }}</td>
          <td itemprop="email" class="text-xs-center">
            <a :href="`mailto:${props.item.email}`">{{ props.item.email }}</a>
          </td>
        </template>
      </v-data-table>
    </section>

    <h1>Педагогический состав</h1>
    <section v-if="teachersErr">
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
          :headers="headersTeachingStaff"
          :items="teachers"
          class="elevation-2 pointer"
          :search="search"
          rows-per-page-text="Записей на странице"
        >
          <template slot="items" slot-scope="props">
            <tr
              @click="props.expanded = !props.expanded"
              title="Нажмите для просмотра дополнительной информации"
            >
              <td itemprop="fio" class="text-xs-left">{{ props.item.fio }}</td>
              <td itemprop="post" class="text-xs-center">{{ props.item.post }}</td>
              <td
                itemprop="teachingDescipline"
                class="text-xs-center"
              >{{ props.item.teachingDescipline }}</td>
              <td itemprop="teachingLevel" class="text-xs-center">{{ props.item.teachingLevel }}</td>
              <td itemprop="teachingQual" class="text-xs-center">{{ props.item.teachingQual }}</td>
              <td itemprop="degree" class="text-xs-center">{{ props.item.degree }}</td>
              <td itemprop="academStat" class="text-xs-center">{{ props.item.academStat }}</td>
              <td
                itemprop="employeeQualification"
                class="text-xs-center"
              >{{ props.item.employeeQualification }}</td>
            </tr>
          </template>
          <template slot="expand" slot-scope="props">
            <v-card flat>
              <v-card-text itemprop="profDevelopment">
                <b>Повышение квалификации:</b>
                {{ props.item.profDevelopment }}
              </v-card-text>
              <v-card-text itemprop="genExperience">
                <b>Общий стаж работы:</b>
                {{ props.item.genExperience }}
              </v-card-text>
              <v-card-text itemprop="specExperience">
                <b>Стаж работы по специальности:</b>
                {{ props.item.specExperience }}
              </v-card-text>
            </v-card>
          </template>
          <template
            slot="pageText"
            slot-scope="props"
          >Записей {{ props.pageStart }} - {{ props.pageStop }} из {{ props.itemsLength }}</template>
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
      headersHeads: [
        {
          text: 'ФИО',
          align: 'left',
          sortable: false,
          value: 'fio',
          width: '50%'
        },
        { text: 'Должность', sortable: false, value: 'post', width: '20%' },
        { text: 'Телефон', sortable: false, value: 'telephone', width: '10%' },
        { text: 'Почта', sortable: false, value: 'email', width: '20%' }
      ],
      headersTeachingStaff: [
        { text: 'ФИО', align: 'left', sortable: false, value: 'fio' },
        { text: 'Должность', sortable: false, value: 'post' },
        {
          text: 'Преподаваемые дисциплины',
          sortable: false,
          value: 'teachingDiscipline'
        },
        {
          text: 'Уровень образования',
          sortable: false,
          value: 'teachingLevel'
        },
        { text: 'Квалификация', sortable: false, value: 'teachingQual' },
        { text: 'Учёная степень', sortable: false, value: 'degree' },
        { text: 'Учёное звание', sortable: false, value: 'academStat' },
        {
          text: 'Наименование направления подготовки и (или) специальности',
          sortable: false,
          value: 'employeeQualification'
        }
        /* {
          text: "Повышение квалификации",
          sortable: false,
          value: "profDevelopment"
        },
        { text: "Общий стаж работы", sortable: false, value: "genExperience" },
        {
          text: "Стаж работы по специальности",
          sortable: false,
          value: "specExperience"
        } */
      ],
      loading: false
    }
  },
  async fetch({ store }) {
    store.dispatch('teachingStaff/setErrorsToFalse')
    store.dispatch('struct/setErrorsToFalse')

    const fetchStruct = store.dispatch('struct/fetchStruct')
    const fetchTeachers = store.dispatch('teachingStaff/fetchTeachers')

    await fetchStruct.catch(() => {
      store.commit('struct/setStruct', true)
    })
    await fetchTeachers.catch(() => {
      store.commit('teachingStaff/setTeachersErr', true)
    })
  },
  computed: {
    ...mapGetters({
      struct: 'struct/struct',
      structErr: 'struct/structErr',
      teachers: 'teachingStaff/teachers',
      teachersErr: 'teachingStaff/teachersErr',
      errMessage: 'helpers/errMessage'
    })
  }
}
</script>
