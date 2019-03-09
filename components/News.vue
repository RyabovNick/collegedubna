<style scoped>
.layout {
  max-width: 68.572em;
  margin: auto;
}

.flex {
  margin: 0px;
}

.v-card {
  margin: auto;
  max-width: 410px;
  padding: 8px;
}

.v-card__title {
  display: inline-table;
}

.v-card__title--primary {
  padding-top: 6px;
}

.headline {
  font-size: 20px;
  text-align: center;
}

.date {
  text-align: center;
  padding-top: 8px;
  padding-bottom: 8px;
}

.alignCenter {
  margin: auto;
}

.mr-3 {
  margin-right: 0px !important;
}

/*от 405 до 600*/
</style>


<template>
  <v-container>
    <section v-if="errorLastNews">
      <v-alert
        :value="true"
        color="error"
        icon="warning"
        outline
      >{{ $store.state.helpers.errMessage }}</v-alert>
    </section>
    <section v-else>
      <v-layout row wrap>
        <v-flex lg4 md6 sm6 xs12 v-for="news in lastNews" :key="news.id">
          <router-link :to="`/news/${news.id}`">
            <v-card hover height="97.1%">
              <v-img :src="`http://college.uni-dubna.ru/files/${news.logo}`" height="18.429em"></v-img>

              <v-card-title primary-title>
                <div class="alignCenter">
                  <div class="date">
                    <v-icon size="24px" class="mr-3">calendar_today</v-icon>
                    {{ news.date_now | formatDateNews}}
                  </div>
                  <h3 class="headline mb-0">{{ news.title }}</h3>
                </div>
              </v-card-title>
            </v-card>
          </router-link>
        </v-flex>
      </v-layout>
    </section>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      news: [],
      loading: true,
      errored: false
    }
  },
  async fetch({ store }) {
    store.commit('news/setErrorLastNews', false)
    try {
      await store.dispatch('news/fetchLastNews')
    } catch {
      store.commit('news/setErrorLastNews', true)
    }
  },
  computed: {
    ...mapGetters({
      lastNews: 'news/lastNews',
      errorLastNews: 'news/errorLastNews'
    })
  }
}
</script>
