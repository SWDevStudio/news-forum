export const state = () => ({
  news: [],
})

export const mutations = {
  setNews: (s, info) => (s.news = info),
}

export const actions = {
  async fetchNews({ commit }) {
    const { data } = await this.$axios.get(
      "http://newsapi.org/v2/top-headlines?country=ru&apiKey=22607c6adc644308bcbd4b4f0d9e28b8"
    )
    // TODO написать проверку на полученные данные
    commit("setNews", data.articles)
  },
}

export const getters = {
  news: (s) => s.news,
}
