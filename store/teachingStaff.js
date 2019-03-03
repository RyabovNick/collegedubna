export const state = () => ({
  teachers: [],
  teachersErr: false
})

export const getters = {
  teachers(state) {
    return state.teachers
  },
  teachersErr(state) {
    return state.teachersErr
  }
}

export const actions = {
  async fetchTeachers({ commit }) {
    const data = await this.$axios.$get('teachingstaff')
    commit('setTeachers', data)
    return data
  },
  async setErrorsToFalse({ commit }) {
    await commit('setTeachersErr', false)
  }
}

export const mutations = {
  setTeachers(state, teachers) {
    state.teachers = teachers
  },
  setTeachersErr(state, value) {
    state.teachersErr = value
  }
}
