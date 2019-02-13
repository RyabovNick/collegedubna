export const state = () => ({
  errMessage:
    'Приносим извинения, произошла ошибка при загрузке данных. Пожалуйста, повторите запрос позднее.'
})

export const getters = {
  errMessage(state) {
    return state.errMessage
  }
}
