<style scoped>
.v-card .v-card__title .v-input {
  max-width: 500px;
  margin: auto;
}
</style>

<template>
  <v-app>
    <h1>Трудойстройство выпускников</h1>
    <section v-if="graduatejobErr">
      <v-alert :value="true" color="error" icon="warning" outline>{{ errMessage }}</v-alert>
    </section>

    <section v-else>
      <v-card>
        <v-card-title v-if="graduatejob.length>5">
          <v-text-field
            v-model="search"
            append-icon="search"
            label="Поиск"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headersGraduatejob"
          :items="graduatejob"
          :search="search"
          class="elevation-1"
          rows-per-page-text="Записей на странице"
        >
          <template slot="items" slot-scope="props">
            <tr>
              <td itemprop="eduCode" class="text-xs-left">{{ props.item.code }}</td>
              <td itemprop="eduName" class="text-xs-center">{{ props.item.name }}</td>
              <td itemprop="year" class="text-xs-center">{{ props.item.year }}</td>
              <td itemprop="count_graduate" class="text-xs-center">{{ props.item.count_graduate }}</td>
              <td
                itemprop="count_work_graduate"
                class="text-xs-center"
              >{{ props.item.count_work_graduate }}</td>
            </tr>
          </template>
        </v-data-table>
      </v-card>
    </section>
    <br>
    <h1>Локальные нормативные акты</h1>
    <section v-if="grantsdocsErr">
      <v-alert :value="true" color="error" icon="warning" outline>{{ errMessage }}</v-alert>
    </section>

    <section v-else>
      <v-data-table
        :headers="headersGrantsdocs"
        :items="grantsdocs"
        hide-actions
        class="elevation-1"
      >
        <template slot="items" slot-scope="props">
          <td itemprop="eduCode eduName" class="text-xs-left">{{ props.item.name }}</td>
          <td itemprop="eduStandartDoc" class="text-xs-center">
            <a :href="`/files/${props.item.link}`" target="_blank">
              <img
                class="icon-size"
                src="@/assets/icons/open.svg"
                alt="Открыть"
                title="Открыть в новом окне"
              >
            </a>
          </td>
          <td itemprop="eduStandartDoc" class="text-xs-center">
            <a :href="`/files/${props.item.link}`" download target="_self">
              <img
                class="icon-size"
                src="@/assets/icons/download.svg"
                alt="Скачать"
                title="Скачать"
              >
            </a>
          </td>
        </template>
      </v-data-table>
    </section>
    <br>
    <h1>Наличие общежития, количество жилых помещений в общежитии для иногородних обучающихся</h1>
    <section v-if="hostelinfoErr">
      <v-alert :value="true" color="error" icon="warning" outline>{{ errMessage }}</v-alert>
    </section>

    <section v-else>
      <v-data-table :items="hostelinfo" class="elevation-1" hide-actions hide-headers>
        <template slot="items" slot-scope="props">
          <td>{{ props.item.name }}</td>
          <td class="text-xs-center" :itemprop="`${props.item.tag}`">{{ props.item.value }}</td>
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
      search: '',
      headersGraduatejob: [
        { text: 'Код программы', sortable: false, value: 'code' },
        {
          text: 'Наименование профессии, специальности, направления подготовки',
          sortable: false,
          value: 'name'
        },
        { text: 'Год', sortable: false, value: 'year' },
        {
          text: 'Кол-во выпускников',
          sortable: false,
          value: 'count_graduate'
        },
        {
          text: 'Кол-во трудоустроенных выпускников',
          sortable: false,
          value: 'count_work_graduate'
        }
      ],
      headersGrantsdocs: [
        { text: 'Название файла', sortable: false, value: 'name' },
        { text: 'Открыть в новом окне', sortable: false, value: 'eduLinkOpen' },
        { text: 'Скачать', sortable: false, value: 'eduLinkDownload' }
      ]
    }
  },
  async fetch({ store }) {
    store.dispatch('grants/setErrorsToFalse')

    const fetchGraduatejob = store.dispatch('grants/fetchGraduatejob')
    const fetchGrantsdocs = store.dispatch('grants/fetchGrantsdocs')
    const fetchHostelinfo = store.dispatch('grants/fetchHostelinfo')

    await fetchGraduatejob.catch(() => {
      store.commit('grants/setGraduatejobErr', true)
    })
    await fetchGrantsdocs.catch(() => {
      store.commit('grants/setGrantsdocsErr', true)
    })
    await fetchHostelinfo.catch(() => {
      store.commit('grants/setHostelinfoErr', true)
    })
  },
  computed: {
    ...mapGetters({
      graduatejob: 'grants/graduatejob',
      graduatejobErr: 'grants/graduatejobErr',
      grantsdocs: 'grants/grantsdocs',
      grantsdocsErr: 'grants/grantsdocsErr',
      hostelinfo: 'grants/hostelinfo',
      hostelinfoErr: 'grants/hostelinfoErr',
      errMessage: 'helpers/errMessage'
    })
  }
}
</script>
