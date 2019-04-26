export const state = () => ({
  educode: [],
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
    let i = 0
    for (const element of data) {
      await this.$axios.$get(`cabinets/${element.id}`).then(value => {
        commit('setCabs', { i, value })
        i++
      })
    }
    return state.educode
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
  async setErrorsToFalse({ commit }) {
    await commit('setEducodeErr', false)
    await commit('setEduaccredErr', false)
    await commit('setPurposelibrErr', false)
    await commit('setPurposeeiosErr', false)
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
  setCabs(state, { i, value }) {
    state.educode[i].cabs = value
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
