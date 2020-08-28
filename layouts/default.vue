<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <n-link class="navbar-brand" to="/">SOVA</n-link>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <n-link to="/news" class="nav-link">Новости </n-link>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <n-link to="/news" class="nav-link">Новости </n-link>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <Nuxt />
  </div>
</template>

<style lang="scss"></style>
