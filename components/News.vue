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
    <v-layout row wrap>
      <v-flex lg4 md6 sm6 xs12 v-for="tnews in news" :key="tnews.id">
        <router-link :to="`/news/${tnews.id}`">
          <v-card hover height="97.1%">
            <v-img :src="`http://college.uni-dubna.ru/files/${tnews.logo}`" height="18.429em"></v-img>

            <v-card-title primary-title>
              <div class="alignCenter">
                <div class="date">
                  <v-icon size="24px" class="mr-3">calendar_today</v-icon>
                  {{ tnews.date_now | formatDateNews}}
                </div>
                <h3 class="headline mb-0">{{ tnews.title }}</h3>
              </div>
            </v-card-title>
          </v-card>
        </router-link>
      </v-flex>
    </v-layout>
  </v-container>
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
