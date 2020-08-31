<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <div class="card-box">
          <div class="row">
            <div class="col-xl-12">
              <div class="header-text text-center">
                <img src="../assets/circle.jpg" alt="" class="img-circle" />
                <h2>Профиль Админа :)</h2>
                <p>I'm front-end developer</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 text-center col-md-offset-1">
              <div class="introduce">
                <h2 class="title">Personal Details</h2>
                <p>
                  Lorem Ipsum - это текст-"рыба", часто используемый в печати и
                  вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для
                  текстов на латинице с начала XVI века. В то время некий
                  безымянный печатник создал большую коллекцию размеров и форм
                  шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem
                  Ipsum не только успешно пережил без заметных изменений пять
                  веков, но и перешагнул в электронный дизайн. Его популяризации
                  в новое время послужили публикация листов Letraset с образцами
                  Lorem Ipsum в 60-х годах и, в более недавнее время, программы
                  электронной вёрстки типа Aldus PageMaker, в шаблонах которых
                  используется Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  name: "Profile",
  asyncData({ app }) {
    return {
      admin: app.$cookies.get("admin"),
    }
  },
  computed: {
    ...mapGetters({
      user: "main/user",
    }),
  },
  created() {
    if (!this.admin) {
      this.$router.replace({ path: "/login" })
    }
  },
}
</script>
