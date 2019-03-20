<style scoped>
.theme--light.v-btn {
  color: #ffffff;
}

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
  display: inherit;
}

.v-card__title--primary {
  padding-top: 6px;
}

.headline {
  font-size: 18px !important;
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

.alignCenter b {
  font-weight: 500;
}

.mr-3 {
  margin-right: 0px !important;
}

a {
  text-decoration: none;
}

.application .application--wrap span p b {
  color: aqua !important;
}
/*от 405 до 600*/
</style>


<template>
  <v-app>
    <h1>Новостная лента</h1>
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
              <v-card-title primary-title>
                <div class="alignCenter">
                  <div class="date">
                    <v-icon size="24px" class="mr-3">calendar_today</v-icon>
                    <b>{{ news.date_now | formatDateNews}}</b>
                  </div>
                  <h3 class="headline mb-0">
                    <b
                      :style="{fontSize: fontSize + 'px',
                      color: color,
                      'font-family': fontFamily,
                      'letter-spacing': letterSpacing + 'px',
                      'font-weight': fontWeight}"
                    >{{ news.title }}</b>
                  </h3>
                </div>
              </v-card-title>
            </v-card>
          </router-link>
        </v-flex>
      </v-layout>
    </section>
    <v-btn nuxt :to="link" depressed large color="rgb(21, 101, 192)" class="v-btn--size">{{ msg }}</v-btn>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  layout: 'special',
  data() {
    return {
      link: '/news/page/1',
      msg: 'Архив новостей'
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
      errorLastNews: 'news/errorLastNews',
      fontSize: 'special/fontSize',
      color: 'special/color',
      fontFamily: 'special/fontFamily',
      letterSpacing: 'special/letterSpacing',
      fontWeight: 'special/fontWeight'
    })
  }
}
</script>
