export const state = () => ({
  common: [],
  commonErr: false
})

export const getters = {
  common(state) {
    return state.common
  },
  commonErr(state) {
    return state.commonErr
  }
}

export const actions = {
  async fetchCommon({ commit }) {
    const data = await this.$axios.$get('common')
    commit('setCommon', data)
    return data
  },
  async setErrorsToFalse({ commit }) {
    await commit('setCommonErr', false)
  }
}

export const mutations = {
  setCommon(state, common) {
    state.common = common
  },
  setCommonErr(state, value) {
    state.commonErr = value
  }
}
