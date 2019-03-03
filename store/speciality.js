export const state = () => ({
  page: [],
  pageErr: false
})

export const getters = {
  page(state) {
    return state.page
  },
  pageErr(state) {
    return state.pageErr
  }
}

export const actions = {
  async fetchPage({ commit }, param) {
    const data = await this.$axios.$get(`pages/${param}`)
    commit('setPage', data[0])
    return data[0]
  },
  async setErrorsToFalse({ commit }) {
    await commit('setPageErr', false)
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
