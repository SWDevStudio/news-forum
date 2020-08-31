import createPersistedState from "vuex-persistedstate"
export default ({ app, store }) => {
  createPersistedState({
    paths: ["main.user"],
  })(store)
}
