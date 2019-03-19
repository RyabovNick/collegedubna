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

a {
  text-decoration: none;
}

.swiper-inner {
  width: 1000px;
  height: 250px;
  padding-top: 50px;
  padding-bottom: 50px;
}
.swiper-slide {
  background-size: cover;
  width: 375px;
  height: 250px;
}

img {
  height: inherit;
}

/*от 405 до 600*/
</style>


<template>
  <v-app>
    <v-container v-if="!galleryErr">
      <div v-swiper:mySwiper="swiperOption" class="gallery-top">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(banner, i) in gallery" :key="i">
            <img :src="banner.link">
          </div>
        </div>
        <div class="swiper-pagination" slot="pagination"></div>
      </div>
    </v-container>
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
    <v-btn nuxt :to="link" depressed large color="rgb(21, 101, 192)" class="v-btn--size">{{ msg }}</v-btn>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      link: '/news/page/1',
      msg: 'Архив новостей',
      // carousel options
      swiperOption: {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        },
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: {
          delay: 5000
        },
        loop: true
      }
    }
  },
  async fetch({ store }) {
    store.commit('news/setErrorLastNews', false)
    store.commit('gallery/setGalleryErr', false)
    try {
      await store.dispatch('gallery/fetchGallery')
    } catch {
      store.commit('gallery/setGalleryErr', true)
    }

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
      gallery: 'gallery/gallery',
      galleryErr: 'gallery/galleryErr'
    })
  }
}
</script>
