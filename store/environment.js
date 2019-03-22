/** template for environments storing in db */

export const state = () => ({
  environment: [],
  environmentErr: false
})

export const getters = {
  environment(state) {
    return state.environment
  },
  environmentErr(state) {
    return state.environmentErr
  }
}

export const actions = {
  async fetchEnvironment({ commit }, param) {
    // id started from 1 in database
    const data = await this.$axios.$get(`environment/${param}`)
    commit('setEnvironment', data)
    return data
  },
  async setErrorsToFalse({ commit }) {
    await commit('setEnvironmentErr', false)
  }
}

export const mutations = {
  setEnvironment(state, data) {
    state.environment = data
  },
  setEnvironmentErr(state, value) {
    state.environmentErr = value
  }
}
