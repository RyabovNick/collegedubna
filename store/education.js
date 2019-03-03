export const state = () => ({
  eduop: [],
  eduaccred: [],
  chislen: [],
  priem: [],
  perevod: [],
  eduopErr: false,
  eduaccredErr: false,
  chislenErr: false,
  priemErr: false,
  perevodErr: false
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
  },
  eduopErr(state) {
    return state.eduopErr
  },
  eduaccredErr(state) {
    return state.eduaccredErr
  },
  chislenErr(state) {
    return state.chislenErr
  },
  priemErr(state) {
    return state.priemErr
  },
  perevodErr(state) {
    return state.perevodErr
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
  },
  async setErrorsToFalse({ commit }) {
    await commit('setEduopErr', false)
    await commit('setEduaccredErr', false)
    await commit('setChislenErr', false)
    await commit('setPriemErr', false)
    await commit('setPerevodErr', false)
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
  },
  setEduopErr(state, value) {
    state.eduopErr = value
  },
  setEduaccredErr(state, value) {
    state.eduaccredErr = value
  },
  setChislenErr(state, value) {
    state.chislenErr = value
  },
  setPriemErr(state, value) {
    state.priemErr = value
  },
  setPerevodErr(state, value) {
    state.perevodErr = value
  }
}
