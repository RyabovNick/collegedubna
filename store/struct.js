export const state = () => ({
  struct: []
})

export const getters = {
  struct(state) {
    return state.struct
  }
}

export const actions = {
  async fetchStruct({ commit }) {
    const data = await this.$axios.$get('heads')
    commit('setStruct', data)
    return data
  }
}

export const mutations = {
  setStruct(state, struct) {
    state.struct = struct
  }
}
