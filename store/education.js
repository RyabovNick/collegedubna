export const state = () => ({
  eduop: [],
  eduaccred: [],
  chislen: [],
  priem: [],
  perevod: []
})

export const getters = {
  eduop(state) {
    return state.eduop
  },
  eduaccred(state) {
    return state.eduaccred
  },
  chislen(state) {
    return state.chislen
  },
  priem(state) {
    return state.priem
  },
  perevod(state) {
    return state.perevod
  }
}

export const actions = {
  async fetchEduop({ commit }) {
    const data = await this.$axios.$get('eduop')
    commit('setEduop', data)
    return data
  },
  async fetchEduaccred({ commit }) {
    const data = await this.$axios.$get('eduaccred')
    commit('setEduaccred', data)
    return data
  },
  async fetchChislen({ commit }) {
    const data = await this.$axios.$get('chislen')
    commit('setChislen', data)
    return data
  },
  async fetchPriem({ commit }) {
    const data = await this.$axios.$get('priem')
    commit('setPriem', data)
    return data
  },
  async fetchPerevod({ commit }) {
    const data = await this.$axios.$get('perevod')
    commit('setPerevod', data)
    return data
  }
}

export const mutations = {
  setEduop(state, eduop) {
    state.eduop = eduop
  },
  setEduaccred(state, eduaccred) {
    state.eduaccred = eduaccred
  },
  setChislen(state, chislen) {
    state.chislen = chislen
  },
  setPriem(state, priem) {
    state.priem = priem
  },
  setPerevod(state, perevod) {
    state.perevod = perevod
  }
}
