export const state = () => ({
  vacant: []
})

export const getters = {
  vacant(state) {
    return state.vacant
  }
}

export const actions = {
  async fetchVacant({ commit }) {
    const data = await this.$axios.$get('vacant')
    commit('setVacant', data)
    return data
  }
}

export const mutations = {
  setVacant(state, vacant) {
    state.vacant = vacant
  }
}
