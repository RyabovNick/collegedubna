export const state = () => ({
  educode: [],
  cabs: [],
  eduaccred: [],
  purposelibr: [],
  purposeeios: [],
  educodeErr: false,
  eduaccredErr: false,
  purposelibrErr: false,
  purposeeiosErr: false
})

export const getters = {
  educode(state) {
    return state.educode
  },
  eduaccred(state) {
    return state.eduaccred
  },
  purposelibr(state) {
    return state.purposelibr
  },
  purposeeios(state) {
    return state.purposeeios
  },
  cabs(state) {
    return state.cabs
  },
  educodeErr(state) {
    return state.educodeErr
  },
  eduaccredErr(state) {
    return state.eduaccredErr
  },
  purposelibrErr(state) {
    return state.purposelibrErr
  },
  purposeeiosErr(state) {
    return state.purposeeiosErr
  }
}

export const actions = {
  async fetchEducode({ commit }) {
    const data = await this.$axios.$get('educode')
    commit('setEducode', data)
    data.forEach(async element => {
      const cabs = await this.$axios.$get(`cabinets/${element.id}`)
      commit('setCabs', cabs)
    })
    return data
  },
  async fetchEduaccred({ commit }) {
    const data = await this.$axios.$get('eduaccred')
    commit('setEduaccred', data)
    return data
  },
  async fetchPurposelibr({ commit }) {
    const data = await this.$axios.$get('purposelibr')
    commit('setPurposelibr', data)
    return data
  },
  async fetchPurposeeios({ commit }) {
    const data = await this.$axios.$get('purposeeios')
    commit('setPurposeeios', data)
    return data
  },
  async fetchEducodeErr({ commit }) {
    await commit('setEducodeErr', true)
  },
  async fetchEduaccredErr({ commit }) {
    await commit('setEduaccredErr', true)
  },
  async fetchPurposelibrErr({ commit }) {
    await commit('setPurposelibrErr', true)
  },
  async fetchPurposeeiosErr({ commit }) {
    await commit('setPurposeeiosErr', true)
  }
}

export const mutations = {
  setEducode(state, educode) {
    state.educode = educode
  },
  setEduaccred(state, eduaccred) {
    state.eduaccred = eduaccred
  },
  setPurposelibr(state, purposelibr) {
    state.purposelibr = purposelibr
  },
  setPurposeeios(state, purposeeios) {
    state.purposeeios = purposeeios
  },
  setCabs(state, value) {
    state.cabs.push(value)
  },
  setEducodeErr(state, value) {
    state.educodeErr = value
  },
  setEduaccredErr(state, value) {
    state.eduaccredErr = value
  },
  setPurposelibrErr(state, value) {
    state.purposelibrErr = value
  },
  setPurposeeiosErr(state, value) {
    state.purposeeiosErr = value
  }
}
