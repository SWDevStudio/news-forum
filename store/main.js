export const state = () => ({
  user: {},
})

export const mutations = {
  setUser: (state, data) => (state.user = data),
}

export const actions = {
  authorization({ commit }, userData) {
    commit("setUser", userData)
  },
}

export const getters = {
  user: (state) => state.user,
}
