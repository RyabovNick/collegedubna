export const state = () => ({
  contacts: [],
  contactsErr: false
})

export const getters = {
  contacts(state) {
    return state.contacts
  },
  contactsErr(state) {
    return state.contactsErr
  }
}

export const actions = {
  async fetchContacts({ commit }, param) {
    const data = await this.$axios.$get(`pages/${param}`)
    commit('setContacts', data[0])
    return data[0]
  },
  async setErrorsToFalse({ commit }) {
    await commit('setContactsErr', false)
  }
}

export const mutations = {
  setContacts(state, contacts) {
    state.contacts = contacts
  },
  setContactsErr(state, value) {
    state.contactsErr = value
  }
}
