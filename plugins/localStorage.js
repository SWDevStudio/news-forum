import createPersistedState from "vuex-persistedstate"
export default ({ app, store }) => {
  window.onNuxtReady(() => {
    createPersistedState({
      paths: ["main.user"],
    })(store)
    window.vuexReady = true
  })
}
