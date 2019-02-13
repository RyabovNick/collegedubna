<style scoped>
.v-card .v-card__title .v-input {
  max-width: 500px;
  margin: auto;
}
</style>

<style>
table.v-table thead th {
  white-space: initial;
}
</style>

<template>
  <v-app>
    <h1>Трудойстройство выпускников</h1>
    <section v-if="erroredGraduatejob">
      <p>Приносим извинения, произошла ошибка. Пожалуйста, повторите позднее</p>
    </section>

    <section v-else>
      <div v-if="loadingGraduatejob">Загрузка...</div>
      <v-data-table
        :headers="headersGraduatejob"
        :items="$store.state.grants.graduatejob"
        class="elevation-1"
      >
        <template slot="items" slot-scope="props">
          <td itemprop="eduCode" class="text-xs-left">{{ props.item.code }}</td>
          <td itemprop="eduName" class="text-xs-left">{{ props.item.name }}</td>
          <td itemprop="year" class="text-xs-left">{{ props.item.year }}</td>
          <td itemprop="count_graduate" class="text-xs-left">{{ props.item.count_graduate }}</td>
          <td
            itemprop="count_work_graduate"
            class="text-xs-left"
          >{{ props.item.count_work_graduate }}</td>
        </template>
      </v-data-table>
    </section>
    <br>
    <h1>Локальные нормативные акты</h1>
    <section v-if="erroredGrantsdocs">
      <p>Приносим извинения, произошла ошибка. Пожалуйста, повторите позднее</p>
    </section>

    <section v-else>
      <div v-if="loadingGrantsdocs">Загрузка...</div>
      <v-data-table
        :headers="headersGrantsdocs"
        :items="$store.state.grants.grantsdocs"
        hide-actions
        class="elevation-1"
      >
        <template slot="items" slot-scope="props">
          <td itemprop="eduCode eduName" class="text-xs-left">{{ props.item.name }}</td>
          <td itemprop="eduStandartDoc" class="text-xs-right">
            <a :href="`/files/${props.item.link}`" target="_blank">
              <img
                class="icon-size"
                src="@/assets/icons/open.svg"
                alt="Открыть"
                title="Открыть в новом окне"
              >
            </a>
          </td>
          <td itemprop="eduStandartDoc" class="text-xs-right">
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
    <section v-if="erroredHostelinfo">
      <p>Приносим извинения, произошла ошибка. Пожалуйста, повторите позднее</p>
    </section>

    <section v-else>
      <div v-if="loadingHostelinfo">Загрузка...</div>
      <v-data-table
        :items="$store.state.grants.hostelinfo"
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
      headersGraduatejob: [
        { text: 'Код программы', sortable: false, value: 'eduCode' },
        {
          text: 'Наименование профессии, специальности, направления подготовки',
          sortable: false,
          value: 'eduName'
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
      loadingGraduatejob: false,
      erroredGraduatejob: false,
      headersGrantsdocs: [
        { text: 'Название файла', sortable: false, value: 'name' },
        { text: 'Открыть в новом окне', sortable: false, value: 'eduLinkOpen' },
        { text: 'Скачать', sortable: false, value: 'eduLinkDownload' }
      ],
      loadingGrantsdocs: false,
      erroredGrantsdocs: false,
      loadingHostelinfo: false,
      erroredHostelinfo: false
    }
  },
  async fetch({ store }) {
    await store.dispatch('grants/fetchGraduatejob')
    await store.dispatch('grants/fetchGrantsdocs')
    await store.dispatch('grants/fetchHostelinfo')
  },
  computed: {
    ...mapGetters(['graduatejob', 'grantsdocs', 'hostelinfo'])
  }
}
</script>