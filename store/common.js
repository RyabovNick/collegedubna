export const state = () => ({
  common: []
})

export const getters = {
  common(state) {
    return state.common
  }
}

export const actions = {
  async fetchCommon({ commit }) {
    const data = await this.$axios.$get('common')
    commit('setCommon', data)
    return data
  }
}

export const mutations = {
  setCommon(state, common) {
    state.common = common
  }
}
