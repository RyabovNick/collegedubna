export const state = () => ({
  fontSize: 16,
  color: 'black',
  backgroundColor: 'white',
  fontFamily: 'Arial',
  letterSpacing: 0.0,
  fontWeight: 500,
  defaultFontSize: 16,
  defaultColor: 'black',
  defaultBackgroundColor: 'white',
  defaultFontFamily: 'Arial',
  defaultLetterSpacing: 0.0,
  defaultFontWeight: 500
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
  // размер шрифта от 0 до 60
  changeFontSize({ commit, state }, value) {
    let newFontSize = null
    if (value) {
      newFontSize =
        state.fontSize + 1 >= 60 ? state.fontSize : state.fontSize + 1
      commit('setFontSize', newFontSize)
    } else {
      newFontSize = state.fontSize - 1 < 0 ? state.fontSize : state.fontSize - 1
      commit('setFontSize', newFontSize)
    }
  },
  changeFontFamily({ commit }, value) {
    value
      ? commit('setFontFamily', 'Arial')
      : commit('setFontFamily', 'Times New Roman')
  },
  changeFontWeight({ commit, state }, value) {
    let newFontWeight = null
    if (value) {
      newFontWeight =
        state.fontWeight + 1 >= 1000 ? state.fontWeight : state.fontWeight + 100
      commit('setFontWeight', newFontWeight)
    } else {
      newFontWeight =
        state.fontWeight - 1 < 0 ? state.fontWeight : state.fontWeight - 100
      commit('setFontWeight', newFontWeight)
    }
  },
  changeLetterSpacing({ commit, state }, value) {
    let newLetterSpacing = null
    if (value) {
      newLetterSpacing =
        state.letterSpacing + 0.1 >= 10
          ? state.letterSpacing
          : state.letterSpacing + 0.1
      commit('setLetterSpacing', newLetterSpacing)
    } else {
      newLetterSpacing =
        state.letterSpacing - 0.1 < 0 ? 0 : state.letterSpacing - 0.1
      commit('setLetterSpacing', newLetterSpacing)
    }
  },
  changeColor({ commit }, value) {
    commit('setColor', value)
  },
  changeBackgroundColor({ commit }, value) {
    commit('setBackgroundColor', value)
  }
}

export const mutations = {
  setDefault(state) {
    state.fontSize = state.defaultFontSize
    state.color = state.defaultColor
    state.backgroundColor = state.defaultBackgroundColor
    state.fontFamily = state.defaultFontFamily
    state.letterSpacing = state.defaultLetterSpacing
    state.fontWeight = state.defaultFontWeight
  },
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
