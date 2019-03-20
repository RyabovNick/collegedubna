export const state = () => ({
  fontSize: 16,
  color: 'black',
  backgroundColor: 'white',
  fontFamily: 'Arial',
  letterSpacing: 0,
  fontWeight: 500
  //   defaultFontSize: 16,
  //   defaultColor: 'black',
  //   defaultBackgroundColor: 'white',
  //   defaultFontFamily: 'Arial',
  //   defaultLetterSpacing: 0,
  //   defaultFontWeight: 500
})

export const getters = {
  fontSize(state) {
    return state.fontSize
  },
  color(state) {
    return state.color
  },
  backgroundColor(state) {
    return state.backgroundColor
  },
  fontFamily(state) {
    return state.fontFamily
  },
  letterSpacing(state) {
    return state.letterSpacing
  },
  fontWeight(state) {
    return state.fontWeight
  }
}

export const actions = {
  changeFontSize({ commit }, value) {
    if (value) {
      commit('setFontSize', state.fontSize + 1)
    } else {
      commit('setFontSize', state.fontSize - 1)
    }
  }
}

export const mutations = {
  //   setDefault(state) {
  //     state.fontSize = state.defaultFontSize
  //     state.color = state.defaultColor
  //     state.backgroundColor = state.defaultBackgroundColor
  //     state.fontFamily = state.defaultFontFamily
  //     state.letterSpacing = state.defaultLetterSpacing
  //     state.fontWeight = state.defaultFontWeight
  //   },
  setFontSize(state, value) {
    state.fontSize = value
  },
  setColor(state, value) {
    state.color = value
  },
  setBackgroundColor(state, value) {
    state.backgroundColor = value
  },
  setFontFamily(state, value) {
    state.fontFamily = value
  },
  setLetterSpacing(state, value) {
    state.letterSpacing = value
  },
  setFontWeight(state, value) {
    state.fontWeight = value
  }
}
