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

.headline {
  font-size: 20px;
  text-align: center;
}

.date {
  text-align: center;
  padding-top: 8px;
}

.alignCenter {
  margin: auto;
}

/*от 405 до 600*/
</style>


<template>
  <v-layout row wrap>
    <v-flex lg4 md6 sm6 xs12 v-for="tnews in news" :key="tnews.id">
      <router-link :to="`/news/${tnews.id}`">
        <v-card hover height="97.1%">
          <v-card-media :src="`http://college.uni-dubna.ru/files/${tnews.logo}`" height="18.429em"></v-card-media>

          <v-card-title primary-title>
            <div class="alignCenter">
              <h3 class="headline mb-0">{{ tnews.title }}</h3>
              <div class="date">{{ tnews.date_now | formatDate}}</div>
            </div>
          </v-card-title>
        </v-card>
      </router-link>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      news: [],
      loading: true,
      errored: false,
      card_text:
        'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.'
    }
  },
  mounted() {
    axios
      .get('http://localhost:3000/api/news/page/0')
      .then(response => (this.news = response.data))
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => (this.loading = false))
  }
}
</script>
