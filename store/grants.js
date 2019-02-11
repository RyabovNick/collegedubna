export const state = () => ({
  graduatejob: [],
  grantsdocs: [],
  hostelinfo: []
})

export const getters = {
  graduatejob(state) {
    return state.graduatejob
  },
  grantsdocs(state) {
    return state.grantsdocs
  },
  hostelinfo(state) {
    return state.hostelinfo
  }
}

export const actions = {
  async fetchGraduatejob({ commit }) {
    const data = await this.$axios.$get('graduatejob')
    commit('setGraduatejob', data)
    return data
  },
  async fetchGrantsdocs({ commit }) {
    const data = await this.$axios.$get('grantsdocs')
    commit('setGrantsdocs', data)
    return data
  },
  async fetchHostelinfo({ commit }) {
    const data = await this.$axios.$get('hostelinfo')
    commit('setHostelinfo', data)
    return data
  }
}

export const mutations = {
  setGraduatejob(state, graduatejob) {
    state.graduatejob = graduatejob
  },
  setGrantsdocs(state, grantsdocs) {
    state.grantsdocs = grantsdocs
  },
  setHostelinfo(state, hostelinfo) {
    state.hostelinfo = hostelinfo
  }
}
