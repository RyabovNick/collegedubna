export const state = () => ({
  struct: [],
  structErr: false
})

export const getters = {
  struct(state) {
    return state.struct
  },
  structErr(state) {
    return state.structErr
  }
}

export const actions = {
  async fetchStruct({ commit }) {
    const data = await this.$axios.$get('heads')
    commit('setStruct', data)
    return data
  },
  async fetchStructErr({ commit }) {
    await commit('setStructErr', true)
  }
}

export const mutations = {
  setStruct(state, struct) {
    state.struct = struct
  },
  setStructErr(state, value) {
    state.structErr = value
  }
}
