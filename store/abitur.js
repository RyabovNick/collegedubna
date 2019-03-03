export const state = () => ({
  abitur: [],
  abiturErr: false
})

export const getters = {
  abitur(state) {
    return state.abitur
  },
  abiturErr(state) {
    return state.abiturErr
  }
}

export const actions = {
  async fetchAbitur({ commit }, param) {
    const data = await this.$axios.$get(`pages/${param}`)
    commit('setAbitur', data[0])
    return data[0]
  },
  async setErrorsToFalse({ commit }) {
    await commit('setAbiturErr', false)
  }
}

export const mutations = {
  setAbitur(state, abitur) {
    state.abitur = abitur
  },
  setAbiturErr(state, value) {
    state.abiturErr = value
  }
}
