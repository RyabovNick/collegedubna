export const state = () => ({
  graduatejob: [],
  grantsdocs: [],
  hostelinfo: [],
  graduatejobErr: false,
  grantsdocsErr: false,
  hostelinfoErr: false
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
  },
  graduatejobErr(state) {
    return state.graduatejobErr
  },
  grantsdocsErr(state) {
    return state.grantsdocsErr
  },
  hostelinfoErr(state) {
    return state.hostelinfoErr
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
  },
  async setErrorsToFalse({ commit }) {
    await commit('setGraduatejobErr', false)
    await commit('setGrantsdocsErr', false)
    await commit('setHostelinfoErr', false)
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
  },
  setGraduatejobErr(state, value) {
    state.graduatejobErr = value
  },
  setGrantsdocsErr(state, value) {
    state.grantsdocsErr = value
  },
  setHostelinfoErr(state, value) {
    state.hostelinfoErr = value
  }
}
