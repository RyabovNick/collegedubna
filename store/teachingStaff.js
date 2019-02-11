export const state = () => ({
  teachers: []
})

export const getters = {
  teachers(state) {
    return state.teachers
  }
}

export const actions = {
  async fetchTeachers({ commit }) {
    const data = await this.$axios.$get('teachingstaff')
    commit('setTeachers', data)
    return data
  }
}

export const mutations = {
  setTeachers(state, teachers) {
    state.teachers = teachers
  }
}
