<style scoped>
.v-card {
  max-width: 800px;
  margin: auto;
}

.theme--light.v-list .v-list__tile__sub-title {
  color: #2c3e50;
  font-size: 16px;
}
</style>


<template>
  <v-app>
    <section v-if="errorPages">
      <v-alert :value="true" color="error" icon="warning" outline>{{ errorMsg }}</v-alert>
    </section>
    <section v-else>
      <v-layout row>
        <v-flex xs12 sm12>
          <v-card>
            <v-list three-line>
              <template v-for="(item, index) in listNews">
                <v-list-tile :key="index" avatar ripple nuxt :to="`/news/${item.id}`">
                  <v-flex xs10>
                    <v-list-tile-content>
                      <v-list-tile-sub-title v-html="item.title"></v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-flex>
                  <v-flex xs2>
                    <v-list-tile-action>
                      <v-list-tile-action-text>{{ item.date_now | formatDateNews}}</v-list-tile-action-text>
                    </v-list-tile-action>
                  </v-flex>
                </v-list-tile>
                <v-divider v-if="index + 1 < listNews.length" :key="`divider-${index}`"></v-divider>
              </template>
            </v-list>
          </v-card>
        </v-flex>
      </v-layout>
      <div class="text-xs-center">
        <v-container>
          <v-layout justify-center>
            <v-flex xs12 sm10>
              <v-card>
                <v-card-text>
                  <v-pagination v-model="page" :length="countPages" @input="next"></v-pagination>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
    </section>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      page: 1,
      news: [],
      errorMsg: 'К сожалению, данной страницы не существует :('
    }
  },
  created() {
    this.page = Number(this.$route.params.id)
  },
  async fetch({ store, params }) {
    store.commit('news/setErrorPages', false)
    try {
      await store.dispatch('news/fetchPageNews', params.id)
      // подгрузить количество страниц только в первый раз
      if (store.state.news.countPages === 0) {
        store.dispatch('news/fetchCountPages')
      }
    } catch {
      await store.commit('news/setErrorPages', true)
    }
  },
  computed: {
    ...mapGetters({
      listNews: 'news/listNews',
      countPages: 'news/countPages',
      errorPages: 'news/errorPages'
    })
  },
  methods: {
    next(page) {
      this.$router.push({ path: `/news/page/${page}` })
    }
  }
}
</script>
