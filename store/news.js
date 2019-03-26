export const state = () => ({
  news: [],
  newsPhotos: [],
  newsErr: false,
  newsDoesNotExist: false,
  // pagination
  listNews: [],
  countPages: 0,
  errorPages: false,
  // mainpage
  lastNews: [],
  errorLastNews: false
})

export const getters = {
  news(state) {
    return state.news
  },
  newsPhotos(state) {
    return state.newsPhotos
  },
  newsErr(state) {
    return state.newsErr
  },
  newsDoesNotExist(state) {
    return state.newsDoesNotExist
  },
  listNews(state) {
    return state.listNews
  },
  countPages(state) {
    // console.log('typeof: ' + typeof state.countPages)
    return state.countPages
  },
  errorPages(state) {
    return state.errorPages
  },
  lastNews(state) {
    return state.lastNews
  },
  errorLastNews(state) {
    return state.errorLastNews
  }
}

export const actions = {
  async fetchNews({ commit }, id) {
    const data = this.$axios.$get(`news/${id}`)
    const photos = this.$axios.$get(`news/${id}/photo`)

    await data.then(response => {
      if (response.length === 0) {
        commit('setNewsDoesNotExist', true)
      } else {
        commit('setNews', response[0])
      }
    })

    await photos.then(response => {
      commit('setNewsPhotos', response)
    })

    return data
  },
  async fetchNewsErr({ commit }) {
    await commit('setNewsErr', true)
  },
  async fetchCountPages({ commit }) {
    const data = await this.$axios.$get(`newscount`)
    const newsOnPage = 20
    const pages = Math.ceil(data[0].news_count / newsOnPage)
    await commit('setCountPages', pages)
  },
  async fetchPageNews({ commit }, id) {
    const data = await this.$axios.$get(`news/page/${id}`)
    commit('setPageNews', data)
    return data
  },
  async fetchLastNews({ commit }) {
    const data = await this.$axios.$get(`lastsixnews`)
    commit('setLastNews', data)
    return data
  }
}

export const mutations = {
  setNews(state, news) {
    state.news = news
  },
  setNewsPhotos(state, photos) {
    state.newsPhotos = photos
  },
  setNewsErr(state, value) {
    state.newsErr = value
  },
  setNewsDoesNotExist(state, value) {
    state.newsDoesNotExist = value
  },
  setCountPages(state, value) {
    state.countPages = value
  },
  setPageNews(state, value) {
    state.listNews = value
  },
  setErrorPages(state, value) {
    state.errorPages = value
  },
  setLastNews(state, value) {
    state.lastNews = value
  },
  setErrorLastNews(state, value) {
    state.errorLastNews = value
  }
}
