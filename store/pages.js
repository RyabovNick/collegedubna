/** template for pages storing in db */

export const state = () => ({
  page: [
    {
      id: 1,
      name: 'abitur',
      content: '',
      err: false
    },
    {
      id: 2,
      name: 'speciality',
      content: '',
      err: false
    },
    {
      id: 3,
      name: 'about',
      content: '',
      err: false
    },
    {
      id: 4,
      name: 'contacts',
      content: '',
      err: false
    },
    {
      id: 5,
      name: 'social_support',
      content: '',
      err: false
    },
    {
      id: 6,
      name: 'virtual_test',
      content: '',
      err: false
    },
    {
      id: 7,
      name: 'normative',
      content: '',
      err: false
    },
    {
      id: 8,
      name: 'responsibilities',
      content: '',
      err: false
    },
    {
      id: 9,
      name: 'rights',
      content: '',
      err: false
    },
    {
      id: 10,
      name: 'work',
      content: '',
      err: false
    },
    {
      id: 11,
      name: 'WorldSkills',
      content: '',
      err: false
    },
    {
      id: 12,
      name: 'Олимпиады',
      content: '',
      err: false
    },
    {
      id: 13,
      name: 'Конкурсы',
      content: '',
      err: false
    },
    {
      id: 14,
      name: 'Демонстрационный экзамен',
      content: '',
      err: false
    }
  ],
  pageErr: false
})

export const getters = {
  page(state) {
    return state.page
  }
}

export const actions = {
  async fetchPage({ commit }, param) {
    // id started from 1 in database
    const data = await this.$axios.$get(`pages/${param + 1}`)
    commit('setPage', { data: data[0].content, param: param })
    return data[0]
  },
  async setErrorsToFalse({ commit }, param) {
    await commit('setPageErr', { id: param, value: false })
  }
}

export const mutations = {
  setPage(state, { data, param }) {
    state.page[param].content = data
  },
  setPageErr(state, { id, value }) {
    state.page[id].err = value
  }
}
