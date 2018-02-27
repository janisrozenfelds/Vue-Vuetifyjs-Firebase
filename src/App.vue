<template>
  <v-app>
    <app-header v-if="userIsAuthenticated"/>

    <v-content>
      <router-view/>
    </v-content>

    <app-footer/>

  </v-app>
</template>

<script>
export default {
  // check if it is User or undefined
  computed: {
    userIsAuthenticated () {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    }
  },
  methods: {
    onLogout () {
      this.$store.dispatch('logout')
      this.$router.push('/')
    }
  }
}
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
