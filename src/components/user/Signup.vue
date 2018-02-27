<template>
  <v-container fill-height  text-xs-center>
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

            <h1 class="title mb-2">Create your account.</h1>
            <v-form @submit.prevent="onSignup">

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

            <v-flex>
              <v-text-field
              name="confirmPassword"
              label="Confirm Password"
              id="confirmPassword"
              v-model="confirmPassword"
              type="password"
              :rules="[comparePasswords]"
              required>
              </v-text-field>
            </v-flex>

            <v-btn
            color="primary"
            type="submit"
            :loading="loading"
            :disabled="loading"
            @click.native="loader = 'loading'">
            Sign up
            </v-btn>

            </v-form>
          </v-container>
        </v-card>
        <p>Already have an account?<v-btn to="/signin" flat color="primary">Sign in</v-btn></p>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  computed: {
    comparePasswords () {
      return this.password !== this.confirmPassword ? 'Passwords do not match' : ''
    },
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
    onSignup () {
      this.$store.dispatch('signUserUp', {email: this.email, password: this.password})
    },
    onDismissed () {
      this.$store.dispatch('clearError')
    }
  }
}
</script>
