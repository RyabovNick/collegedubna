<style scoped>
.v-card .v-card__title .v-input {
  max-width: 500px;
  margin: auto;
}
</style>


<template>
  <v-app>
    <h1>Образовательные стандарты</h1>
    <section v-if="standartsErr">
      <v-alert :value="true" color="error" icon="warning" outline>{{ errMessage }}</v-alert>
    </section>

    <section v-else>
      <div v-if="loading">Загрузка...</div>
      <v-card>
        <v-card-title v-if="standarts.length > 6">
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
          :items="standarts"
          :search="search"
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
        { text: 'Программа', sortable: false, value: 'name' },
        { text: 'Открыть в новом окне', sortable: false, value: 'eduLinkOpen' },
        { text: 'Скачать', sortable: false, value: 'eduLinkDownload' }
      ],
      loading: false
    }
  },
  async fetch({ store }) {
    store.dispatch('eduStandarts/setErrorsToFalse', false)
    try {
      await store.dispatch('eduStandarts/fetchStandarts')
    } catch {
      await store.commit('eduStandarts/setStandartsErr', true)
    }
  },
  computed: {
    ...mapGetters({
      standarts: 'eduStandarts/standarts',
      standartsErr: 'eduStandarts/standartsErr',
      errMessage: 'helpers/errMessage'
    })
  }
}
</script>
