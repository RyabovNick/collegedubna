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
  padding-bottom: 1em;
  padding-top: 1em;
}

.pointer td {
  cursor: pointer;
}

.v-card__text {
  padding: 2px 24px;
}

.v-card__text p {
  display: inline-flex;
  width: 300px;
  margin: 0;
}

.v-card__text p:first-child {
  font-weight: bold;
}
</style>

<style>
table.v-table thead th {
  white-space: initial;
}
</style>



<template>
  <v-app>
    <h1>Образование</h1>
    <h2>Информация по образовательным программам</h2>
    <section v-if="eduopErr">
      <v-alert :value="true" color="error" icon="warning" outline>{{ errMessage }}</v-alert>
    </section>
    <section v-else>
      <v-card>
        <v-card-title>
          <v-text-field
            v-model="searchEduop"
            append-icon="search"
            label="Поиск"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headersEduop"
          :items="eduop"
          :search="searchEduop"
          class="elevation-2 pointer"
          rows-per-page-text="Записей на странице"
        >
          <template slot="items" slot-scope="props">
            <tr @click="props.expanded = !props.expanded">
              <td itemprop="eduCode" class="text-xs-left">{{ props.item.eduCode }}</td>
              <td itemprop="eduName" class="text-xs-right">{{ props.item.eduName }}</td>
              <td itemprop="eduLevel" class="text-xs-right">{{ props.item.eduLevel }}</td>
              <td itemprop="eduForm" class="text-xs-right">{{ props.item.eduForm }}</td>
              <td itemprop="eduYear" class="text-xs-right">{{ props.item.year }}</td>
              <td itemprop="eduPr" class="text-xs-right">{{ props.item.eduPr }}</td>
            </tr>
          </template>
          <template slot="expand" slot-scope="props">
            <v-card flat>
              <v-card-text itemprop="opMain">
                <p>Описание образовательной программы</p>
                <p>
                  <a :href="`/files/${props.item.opMain}`" target="_blank">
                    <img
                      class="icon-size"
                      src="@/assets/icons/open.svg"
                      alt="Открыть"
                      title="Открыть в новом окне"
                    >
                  </a>
                  <a :href="`/files/${props.item.opMain}`" download target="_self">
                    <img
                      class="icon-size"
                      src="@/assets/icons/download.svg"
                      alt="Скачать"
                      title="Скачать"
                    >
                  </a>
                </p>
              </v-card-text>
              <v-card-text v-if="props.item.educationPlan !== null" itemprop="educationPlan">
                <p>Учебный план</p>
                <p>
                  <a :href="`/files/${props.item.educationPlan}`" target="_blank">
                    <img
                      class="icon-size"
                      src="@/assets/icons/open.svg"
                      alt="Открыть"
                      title="Открыть в новом окне"
                    >
                  </a>
                  <a :href="`/files/${props.item.educationPlan}`" download target="_self">
                    <img
                      class="icon-size"
                      src="@/assets/icons/download.svg"
                      alt="Скачать"
                      title="Скачать"
                    >
                  </a>
                </p>
              </v-card-text>
              <v-card-text
                v-if="props.item.educationAnnotation !== null"
                itemprop="educationAnnotation"
              >
                <p>Аннотации к рабочим программам дисциплин</p>
                <p>
                  <a :href="`/files/${props.item.educationAnnotation}`" download target="_self">
                    <img
                      class="icon-size"
                      src="@/assets/icons/download.svg"
                      alt="Скачать"
                      title="Скачать"
                    >
                  </a>
                </p>
              </v-card-text>
              <v-card-text v-if="props.item.educationShedule !== null" itemprop="educationShedule">
                <p>Календарный учебный график</p>
                <p>
                  <a :href="`/files/${props.item.educationShedule}`" target="_blank">
                    <img
                      class="icon-size"
                      src="@/assets/icons/open.svg"
                      alt="Открыть"
                      title="Открыть в новом окне"
                    >
                  </a>
                  <a :href="`/files/${props.item.educationShedule}`" download target="_self">
                    <img
                      class="icon-size"
                      src="@/assets/icons/download.svg"
                      alt="Скачать"
                      title="Скачать"
                    >
                  </a>
                </p>
              </v-card-text>
              <v-card-text v-if="props.item.methodology !== null" itemprop="methodologyedu">
                <p>Методические и иные документы</p>
                <p>
                  <a :href="`/files/${props.item.methodology}`" target="_blank">
                    <img
                      class="icon-size"
                      src="@/assets/icons/open.svg"
                      alt="Открыть"
                      title="Открыть в новом окне"
                    >
                  </a>
                  <a :href="`/files/${props.item.methodology}`" download target="_self">
                    <img
                      class="icon-size"
                      src="@/assets/icons/download.svg"
                      alt="Скачать"
                      title="Скачать"
                    >
                  </a>
                </p>
              </v-card-text>
            </v-card>
          </template>
        </v-data-table>
      </v-card>
    </section>
    <h2>Информация о сроке действия государственной аккредитации образовательной программы, о языках, на которых осуществляется образование (обучение)</h2>
    <section v-if="eduaccredErr">
      <v-alert :value="true" color="error" icon="warning" outline>{{ errMessage }}</v-alert>
    </section>
    <section v-else>
      <v-card>
        <v-card-title>
          <v-text-field
            v-model="searchEduaccred"
            append-icon="search"
            label="Поиск"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headersEduaccred"
          :items="eduaccred"
          expand
          :search="searchEduaccred"
          class="elevation-2"
          rows-per-page-text="Записей на странице"
        >
          <template slot="items" slot-scope="props">
            <td itemprop="eduCode" class="text-xs-left">{{ props.item.eduCode }}</td>
            <td itemprop="eduName" class="text-xs-right">{{ props.item.eduName }}</td>
            <td itemprop="eduLevel" class="text-xs-right">{{ props.item.eduLevel }}</td>
            <td itemprop="learningTerm" class="text-xs-right">{{ props.item.learningTerm }}</td>
            <td itemprop="eduAccred" class="text-xs-right">{{ props.item.dateEnd }}</td>
            <td itemprop="eduLang" class="text-xs-right">{{ props.item.language }}</td>
          </template>
        </v-data-table>
      </v-card>
    </section>
    <h2>Информация о численности обучающихся по реализуемым образовательным программам</h2>
    <section v-if="chislenErr">
      <v-alert :value="true" color="error" icon="warning" outline>{{ errMessage }}</v-alert>
    </section>
    <section v-else>
      <v-card>
        <v-card-title>
          <v-text-field
            v-model="searchChislen"
            append-icon="search"
            label="Поиск"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headersChislen"
          :items="chislen"
          expand
          :search="searchChislen"
          class="elevation-2"
          rows-per-page-text="Записей на странице"
        >
          <template slot="items" slot-scope="props">
            <td itemprop="eduCode" class="text-xs-left">{{ props.item.eduCode }}</td>
            <td itemprop="eduName" class="text-xs-right">{{ props.item.eduName }}</td>
            <td itemprop="eduLevel" class="text-xs-right">{{ props.item.eduLevel }}</td>
            <td itemprop="eduForm" class="text-xs-right">{{ props.item.eduForm }}</td>
            <td itemprop="numberBFpriem" class="text-xs-right">{{ props.item.numberBFpriem }}</td>
            <td itemprop="numberBRpriem" class="text-xs-right">{{ props.item.numberBRpriem }}</td>
            <td itemprop="numberBMpriem" class="text-xs-right">{{ props.item.numberBMpriem }}</td>
            <td itemprop="numberPpriem" class="text-xs-right">{{ props.item.numberPpriem }}</td>
          </template>
        </v-data-table>
      </v-card>
    </section>
    <h2>Информация о результатах приема</h2>
    <section v-if="priemErr">
      <v-alert :value="true" color="error" icon="warning" outline>{{ errMessage }}</v-alert>
    </section>
    <section v-else>
      <v-card>
        <v-card-title>
          <v-text-field
            v-model="searchPriem"
            append-icon="search"
            label="Поиск"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headersPriem"
          :items="priem"
          expand
          :search="searchPriem"
          class="elevation-2"
          rows-per-page-text="Записей на странице"
        >
          <template slot="items" slot-scope="props">
            <td itemprop="eduCode" class="text-xs-left">{{ props.item.eduCode }}</td>
            <td itemprop="eduName" class="text-xs-right">{{ props.item.eduName }}</td>
            <td itemprop="eduLevel" class="text-xs-right">{{ props.item.eduLevel }}</td>
            <td itemprop="eduForm" class="text-xs-right">{{ props.item.eduForm }}</td>
            <td itemprop="numberBFpriem" class="text-xs-right">{{ props.item.numberBFpriem }}</td>
            <td itemprop="numberBRpriem" class="text-xs-right">{{ props.item.numberBRpriem }}</td>
            <td itemprop="numberBMpriem" class="text-xs-right">{{ props.item.numberBMpriem }}</td>
            <td itemprop="numberPpriem" class="text-xs-right">{{ props.item.numberPpriem }}</td>
          </template>
        </v-data-table>
      </v-card>
    </section>
    <h2>Информация о результатах перевода, восстановления и отчисления</h2>
    <section v-if="perevodErr">
      <v-alert :value="true" color="error" icon="warning" outline>{{ errMessage }}</v-alert>
    </section>
    <section v-else>
      <v-card>
        <v-card-title>
          <v-text-field
            v-model="searchPerevod"
            append-icon="search"
            label="Поиск"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headersPerevod"
          :items="perevod"
          expand
          :search="searchPerevod"
          class="elevation-2"
          rows-per-page-text="Записей на странице"
        >
          <template slot="items" slot-scope="props">
            <td itemprop="eduCode" class="text-xs-left">{{ props.item.eduCode }}</td>
            <td itemprop="eduName" class="text-xs-right">{{ props.item.eduName }}</td>
            <td itemprop="eduLevel" class="text-xs-right">{{ props.item.eduLevel }}</td>
            <td itemprop="eduForm" class="text-xs-right">{{ props.item.eduForm }}</td>
            <td itemprop="numberOutPerevod" class="text-xs-right">{{ props.item.numberOutPerevod }}</td>
            <td itemprop="numberToPerevod" class="text-xs-right">{{ props.item.numberToPerevod }}</td>
            <td itemprop="numberResPerevod" class="text-xs-right">{{ props.item.numberResPerevod }}</td>
            <td itemprop="numberExpPerevod" class="text-xs-right">{{ props.item.numberExpPerevod }}</td>
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
      searchEduop: '',
      headersEduop: [
        { text: 'Код', align: 'left', sortable: false, value: 'eduCode' },
        {
          text: 'Наименование специальности, направления подготовки',
          sortable: false,
          value: 'eduName'
        },
        { text: 'Уровень образования', sortable: false, value: 'eduLevel' },
        {
          text: 'Реализуемые формы обучения',
          sortable: false,
          value: 'eduForm'
        },
        { text: 'Год', sortable: false, value: 'year' },
        {
          text:
            'Использование при реализации образовательных программ электронного обучения и дистанционных образовательных технологий',
          sortable: false,
          value: 'eduPr'
        }
      ],
      searchEduaccred: '',
      headersEduaccred: [
        {
          text: 'Код программы',
          align: 'left',
          sortable: false,
          value: 'eduCode'
        },
        { text: 'Название программы', sortable: false, value: 'eduName' },
        {
          text: 'Уровень образования',
          sortable: false,
          value: 'eduLevel'
        },
        {
          text: 'Информация о нормативных сроках обучения',
          sortable: false,
          value: 'learningTerm'
        },
        {
          text: 'Срок действия государственной аккредитации',
          sortable: false,
          value: 'dateEnd'
        },
        {
          text: 'Языки, на которых осуществляется обучение',
          sortable: false,
          value: 'language'
        }
      ],
      searchChislen: '',
      headersChislen: [
        {
          text: 'Код программы',
          align: 'left',
          sortable: false,
          value: 'eduCode'
        },
        {
          text: 'Наименование специальности',
          sortable: false,
          value: 'eduName'
        },
        {
          text: 'Уровень образования',
          sortable: false,
          value: 'eduLevel'
        },
        {
          text: 'Форма обучения',
          sortable: false,
          value: 'eduForm'
        },
        {
          text:
            'Численность обучающихся за счёт бюджетных ассигнований федерального бюджета',
          sortable: false,
          value: 'numberBFpriem'
        },
        {
          text:
            'Численность обучающихся за счёт бюджетов субъектов Российской Федерации',
          sortable: false,
          value: 'numberBRpriem'
        },
        {
          text: 'Численность обучающихся за счёт местных бюджетов',
          sortable: false,
          value: 'numberBMpriem'
        },
        {
          text:
            'Численность обучающихся за счёт средств физических и (или) юридических лиц',
          sortable: false,
          value: 'numberPpriem'
        }
      ],
      searchPriem: '',
      headersPriem: [
        {
          text: 'Код программы',
          align: 'left',
          sortable: false,
          value: 'eduCode'
        },
        {
          text: 'Наименование специальности',
          sortable: false,
          value: 'eduName'
        },
        {
          text: 'Уровень образования',
          sortable: false,
          value: 'eduLevel'
        },
        {
          text: 'Форма обучения',
          sortable: false,
          value: 'eduForm'
        },
        {
          text:
            'Результаты приема за счёт бюджетных ассигнований федерального бюджета',
          sortable: false,
          value: 'numberBFpriem'
        },
        {
          text:
            'Результаты приема за счёт бюджетов субъектов Российской Федерации',
          sortable: false,
          value: 'numberBRpriem'
        },
        {
          text: 'Результаты приема за счёт местных бюджетов',
          sortable: false,
          value: 'numberBMpriem'
        },
        {
          text:
            'Результаты приема за счёт средств физических и (или) юридических лиц',
          sortable: false,
          value: 'numberPpriem'
        }
      ],
      searchPerevod: '',
      headersPerevod: [
        {
          text: 'Код программы',
          align: 'left',
          sortable: false,
          value: 'eduCode'
        },
        {
          text: 'Наименование специальности',
          sortable: false,
          value: 'eduName'
        },
        {
          text: 'Уровень образования',
          sortable: false,
          value: 'eduLevel'
        },
        {
          text: 'Форма обучения',
          sortable: false,
          value: 'eduForm'
        },
        {
          text:
            'Численность обучающихся, переведенных в другие образовательные организации',
          sortable: false,
          value: 'numberOutPerevod'
        },
        {
          text:
            'Численность обучающихся, переведенных из других образовательных организаций',
          sortable: false,
          value: 'numberToPerevod'
        },
        {
          text: 'Численность восстановленных обучающихся',
          sortable: false,
          value: 'numberResPerevod'
        },
        {
          text: 'Численность отчисленных обучающихся',
          sortable: false,
          value: 'numberExpPerevod'
        }
      ]
    }
  },
  async fetch({ store }) {
    try {
      await store.dispatch('education/fetchEduop')
    } catch {
      await store.dispatch('education/fetchEduopErr')
    }
    try {
      await store.dispatch('education/fetchEduaccred')
    } catch {
      await store.dispatch('education/fetchEduaccredErr')
    }
    try {
      await store.dispatch('education/fetchChislen')
    } catch (err) {
      await store.dispatch('education/fetchChislenErr')
    }
    try {
      await store.dispatch('education/fetchPriem')
    } catch {
      await store.dispatch('education/fetchPriemErr')
    }
    try {
      await store.dispatch('education/fetchPerevod')
    } catch {
      await store.dispatch('education/fetchPerevodErr')
    }
  },
  computed: {
    ...mapGetters({
      eduaccred: 'education/eduaccred',
      eduop: 'education/eduop',
      chislen: 'education/chislen',
      priem: 'education/priem',
      perevod: 'education/perevod',
      eduopErr: 'education/eduopErr',
      eduaccredErr: 'education/eduaccredErr',
      chislenErr: 'education/chislenErr',
      priemErr: 'education/priemErr',
      perevodErr: 'education/perevodErr',
      errMessage: 'helpers/errMessage'
    })
  }
}
</script>
