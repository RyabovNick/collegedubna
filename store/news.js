export const state = () => ({
  news: [],
  newsErr: false,
  newsDoesNotExist: false,
  // pagination
  listNews: [],
  countPages: 0
})

export const getters = {
  news(state) {
    return state.news
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
  }
}

export const actions = {
  async fetchNews({ commit }, id) {
    const data = await this.$axios.$get(`news/${id}`)
    if (data.length === 0) {
      commit('setNewsDoesNotExist', true)
    } else {
      commit('setNews', data[0])
    }
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
  }
}

export const mutations = {
  setNews(state, news) {
    state.news = news
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
  }
}
