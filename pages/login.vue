<template>
  <div class="container">
    <div class="row login justify-content-center">
      <div class="col-lg-6 col-md-12">
        <b-alert :show="error" variant="danger">
          Имя пользователя или пароль введены не верно
        </b-alert>
        <b-alert :show="performed" variant="success">
          Авторизация выполнена, вы будете перенесены в профиль
        </b-alert>
        <form>
          <b-form-group
            label="Enter your name"
            label-for="name"
            :invalid-feedback="invalidFeedback"
            :valid-feedback="validFeedback"
            :state="state"
          >
            <b-form-input
              id="name"
              v-model="login"
              :state="state"
              trim
            ></b-form-input>
          </b-form-group>

          <b-form-group
            description="Input for your passwords"
            label="Enter your password"
            label-for="password"
          >
            <b-form-input
              id="password"
              v-model="password"
              type="password"
            ></b-form-input>
          </b-form-group>

          <b-button @click.prevent="sendForm">Авторизация</b-button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
export default {
  data() {
    return {
      login: "",
      password: "",
      error: false,
      performed: false,
    }
  },
  mounted() {
    console.log(this.user)
  },
  computed: {
    ...mapGetters({
      user: "main/user",
    }),
    state() {
      return this.login.length >= 4
    },
    invalidFeedback() {
      if (this.login.length > 4) {
        return ""
      } else if (this.login.length > 0) {
        return "Enter at least 4 characters"
      } else {
        return "Please enter something"
      }
    },
    validFeedback() {
      return this.state === true ? "Thank you" : ""
    },
  },
  watch: {
    login() {
      this.resetError()
    },
    password() {
      this.resetError()
    },
  },
  methods: {
    ...mapActions({
      activeUser: "main/activeUser",
    }),
    resetError() {
      this.error = false
    },
    sendForm() {
      // типо отправил :)
      // let data = axios.get(`host/authorize?login=${this.name}&password=${this.password}`)
      if (this.login === "Admin" && this.password === "12345") {
        this.performed = true
        this.activeUser()
        localStorage.user = true
        setTimeout(() => this.$router.replace({ path: "/profile" }), 3000)
        return
      }
      this.error = true
    },
  },
}
</script>
<style>
.login {
  margin: 50px 0;
}
</style>
