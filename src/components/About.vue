<template>
  <v-container>
  <v-layout>
      <v-flex xs12 md8 offset-md2 offset-xs0>
        <v-card>
          <v-container>
          <h1 class="display-2">About Page</h1>
          </v-container>
          <v-divider></v-divider>

          <v-container>

          </v-container>

        </v-card>
      </v-flex>
  </v-layout>
  </v-container>
</template>

<script>
  export default {
    computed: {
      user () {
        return this.$store.getters.user
      }
    }
  }
</script>
