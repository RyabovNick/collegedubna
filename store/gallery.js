export const state = () => ({
  gallery: [],
  galleryErr: false
})

export const getters = {
  gallery(state) {
    return state.gallery
  },
  galleryErr(state) {
    return state.galleryErr
  }
}

export const actions = {
  async fetchGallery({ commit }) {
    const data = await this.$axios.$get('gallery')
    commit('setGallery', data)
    return data
  },
  async setErrorsToFalse({ commit }) {
    await commit('setGalleryErr', false)
  }
}

export const mutations = {
  setGallery(state, gallery) {
    state.gallery = gallery
  },
  setGalleryErr(state, value) {
    state.galleryErr = value
  }
}
