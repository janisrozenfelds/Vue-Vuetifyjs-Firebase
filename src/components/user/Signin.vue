<template>
  <v-container fill-height text-xs-center>
    <v-layout flex align-center justify-center row>
      <v-flex xs12 sm6 md4 offset-sm0 offset-md0>

        <!-- Error messege -->
        <v-layout v-if="error">
          <v-flex>
            <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
          </v-flex>
        </v-layout>

        <v-card>
          <v-container>

            <v-avatar size="75px" class="mb-4">
              <img class="appLogo" src="/static/app_logo_icon.svg" alt="App Logo"/>
            </v-avatar>

            <h1 class="title mb-2">Welcome to App!</h1>
            <v-form @submit.prevent="onSignin">
            <v-flex>
              <v-text-field
              name="email"
              label="E-mail"
              id="email"
              v-model="email"
              type="email"
              required>
              </v-text-field>
            </v-flex>

            <v-flex>
              <v-text-field
              name="password"
              label="Password"
              id="password"
              v-model="password"
              type="password"
              required>
              </v-text-field>
            </v-flex>

            <v-btn
            color="primary"
            type="submit"
            :loading="loading"
            :disabled="loading"
            @click.native="loader = 'loading'">
            Sign in
            </v-btn>

            </v-form>
          </v-container>
        </v-card>
        <p>Don't have an account?
          <v-btn
          to="/signup"
          flat color="primary">
          Sign up</v-btn>
        </p>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    },
    error () {
      return this.$store.getters.error
    },
    loading () {
      return this.$store.getters.loading
    }
  },
  watch: {
    user (value) {
      if (value !== null && value !== undefined) {
        this.$router.push('/')
      }
    }
  },
  methods: {
    onSignin () {
      this.$store.dispatch('signUserIn', {email: this.email, password: this.password})
    },
    onDismissed () {
      this.$store.dispatch('clearError')
    }
  }
}
</script>

<style>
  img.appLogo {
    border-radius: 0!important;
  }
</style>
