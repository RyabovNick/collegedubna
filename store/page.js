export const state = () => ({
  page: [],
  pageErr: false
})

export const getters = {
  page(state) {
    return state.page
  },
  eduaccredErr(state) {
    return state.pageErr
  }
}

export const actions = {
  async fetchPage({ commit }, param) {
    const data = await this.$axios.$get(`pages/${param}`)
    commit('setPage', data[0])
    return data[0]
  },
  async fetchPageErr({ commit }) {
    await commit('setPageErr', true)
  }
}

export const mutations = {
  setPage(state, page) {
    state.page = page
  },
  setPageErr(state, value) {
    state.pageErr = value
  }
}
