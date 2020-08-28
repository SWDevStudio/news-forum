<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-6 col-md-12"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  mounted() {
    if (Boolean(localStorage.user) !== true) {
      this.$router.replace({ path: "/login" })
    }
  },
}
</script>

<style></style>
