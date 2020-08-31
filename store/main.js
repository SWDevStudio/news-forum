export const state = () => ({
  news: [],
  user: false,
})

export const mutations = {
  setNews: (s, info) => (s.news = info),
  setUser: (s, data) => (s.user = data),
}

export const actions = {
  async fetchNews({ commit }) {
    try {
      const { data } = await this.$axios.get(
        "http://newsapi.org/v2/top-headlines?country=ru&apiKey=22607c6adc644308bcbd4b4f0d9e28b8"
      )
      commit("setNews", data.articles)
    } catch (e) {
      // this.$axios.get("mysite/buglog/add?error=" + e)
      commit("setNews", null)
    }
  },
  activeUser({ commit }) {
    commit("setUser", true)
  },
}

export const getters = {
  news: (s) => s.news,
  user: (s) => s.user,
}
