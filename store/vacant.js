export const state = () => ({
  vacant: [],
  vacantErr: false
})

export const getters = {
  vacant(state) {
    return state.vacant
  },
  vacantErr(state) {
    return state.vacantErr
  }
}

export const actions = {
  async fetchVacant({ commit }) {
    const data = await this.$axios.$get('vacant')
    commit('setVacant', data)
    return data
  },
  async setErrorsToFalse({ commit }) {
    await commit('setVacantErr', false)
  }
}

export const mutations = {
  setVacant(state, vacant) {
    state.vacant = vacant
  },
  setVacantErr(state, value) {
    state.vacantErr = value
  }
}
