export const state = () => ({
  about: [],
  aboutErr: false
})

export const getters = {
  about(state) {
    return state.about
  },
  aboutErr(state) {
    return state.aboutErr
  }
}

export const actions = {
  async fetchAbout({ commit }, param) {
    const data = await this.$axios.$get(`pages/${param}`)
    console.log(data)
    commit('setAbout', data[0])
    return data[0]
  },
  async fetchAboutErr({ commit }) {
    await commit('setAboutErr', true)
  }
}

export const mutations = {
  setAbout(state, about) {
    state.about = about
  },
  setAboutErr(state, value) {
    state.aboutErr = value
  }
}
