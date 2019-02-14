export const state = () => ({
  news: [],
  newsErr: false,
  newsDoesNotExist: false
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
  }
}
