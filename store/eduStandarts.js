export const state = () => ({
  standarts: [],
  standartsErr: false
})

export const getters = {
  standarts(state) {
    return state.standarts
  },
  standartsErr(state) {
    return state.standartsErr
  }
}

export const actions = {
  async fetchStandarts({ commit }) {
    const data = await this.$axios.$get('eduStandarts')
    commit('setStandarts', data)
    return data
  },
  async setErrorsToFalse({ commit }) {
    await commit('setStandartsErr', false)
  }
}

export const mutations = {
  setStandarts(state, standarts) {
    state.standarts = standarts
  },
  setStandartsErr(state, value) {
    state.standartsErr = value
  }
}
