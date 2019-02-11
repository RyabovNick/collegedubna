export const state = () => ({
  standarts: []
})

export const getters = {
  standarts(state) {
    return state.standarts
  }
}

export const actions = {
  async fetchStandarts({ commit }) {
    const data = await this.$axios.$get('eduStandarts')
    commit('setStandarts', data)
    return data
  }
}

export const mutations = {
  setStandarts(state, standarts) {
    state.standarts = standarts
  }
}
