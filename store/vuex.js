export const state = () => ({
  notificationText: '',
})

export const actions = {
  displayNotification({ commit }, payload ) {
    commit('setNotification', { ...payload })

    setTimeout(() => {
      commit('setNotification', { text: '' })
    }, 2000)
  },
}

export const mutations = {
  setNotification(state, { text }) {
    state.notificationText = text
  },
}