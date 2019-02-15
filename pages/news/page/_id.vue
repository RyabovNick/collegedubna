<style scoped>
.v-card {
  max-width: 800px;
  margin: auto;
}
</style>


<template>
  <v-app>
    <v-layout row>
      <v-flex xs12 sm12>
        <v-card>
          <v-list two-line>
            <template v-for="(item, index) in listNews">
              <v-list-tile :key="index" avatar ripple nuxt :to="`/news/${item.id}`">
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
                <v-list-tile-action>
                  <v-list-tile-action-text>{{ item.date_now | formatDate}}</v-list-tile-action-text>
                </v-list-tile-action>
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
          <v-flex xs8>
            <v-card>
              <v-card-text>
                <v-pagination v-model="page" :length="countPages" @input="next"></v-pagination>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      page: 1,
      news: []
    }
  },
  created() {
    this.page = Number(this.$route.params.id)
  },
  async fetch({ store, params }) {
    try {
      await store.dispatch('news/fetchPageNews', params.id)
      // подгрузить количество страниц только в первый раз
      if (store.state.news.countPages === 0) {
        store.dispatch('news/fetchCountPages')
      }
    } catch {
      await store.dispatch('news/fetchAbiturErr')
    }
  },
  computed: {
    ...mapGetters({
      listNews: 'news/listNews',
      countPages: 'news/countPages'
    })
  },
  methods: {
    next(page) {
      this.$router.push({ path: `/news/page/${page}` })
    }
  }
}
</script>
