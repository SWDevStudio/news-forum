<template>
  <div class="container news">
    <b-alert :show="news === null">
      Сервис сообщений временно не доступен
    </b-alert>
    <div class="row">
      <div
        v-for="(item, key) in news"
        :key="key"
        class="col-lg-4 col-md-6 news-block mb-auto"
      >
        <h5 class="news-block__title">{{ item.title }}</h5>
        <div class="news-block__img">
          <img :src="item.urlToImage" alt="" class="img-fluid" />
        </div>
        <p class="news-block__text">{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  name: "News",
  asyncData({ store }) {
    return store.dispatch("main/fetchNews")
  },
  computed: {
    ...mapGetters({
      news: "main/news",
    }),
    count() {
      // eslint-disable-next-line no-undef
      return store.state.test
    },
  },
}
</script>
<style lang="scss">
.news {
  padding-top: 20px;
}
</style>
