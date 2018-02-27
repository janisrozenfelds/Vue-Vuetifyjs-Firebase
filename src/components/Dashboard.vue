<template>
<v-container fill-height text-xs-center>


<v-layout flex align-center justify-center row>
  <v-flex xs12 sm6 md5 offset-sm0 offset-md0>
    <v-card color="blue accent-4" class="white--text">
      <v-container fluid grid-list-lg>

        <v-avatar size="75px" class="mb-4">
        <img class="appLogo" src="/static/app_logo_icon.svg" alt="App Logo"/>
        </v-avatar>
        <v-card-text>
          <div class="headline">Welcome to your app</div>
          <p class="text-xs-center">Build using vue.js + vuetifyjs + firebase.</p>
          <v-divider/>
          <a class="white--text" href="https://twitter.com/roziits" target="_blank">Twitter</a>
          <a class="white--text" href="https://unsplash.com/@janisrozenfelds" target="_blank">Unsplash</a>
          <a class="white--text" href="https://www.instagram.com/janisrozenfelds/" target="_blank">Instagram</a>
        </v-card-text>

      </v-container>
    </v-card>
  </v-flex>
</v-layout>

</v-container>
</template>

<script>
export default {
  data () {
    return {
      max25chars: (v) => v.length <= 25 || 'Input too long!',
      search: '',
      welcomeMeodel: false,
      pagination: {},
      tooltip1: 'Hello',
      headers: [
        {
          align: 'left',
          text: 'Name',
          value: 'companyName'
        },
        { text: 'Ticker', value: 'tickerName' },
        { text: 'Total Score', value: 'totalScore' }
      ]
    }
  },
  computed: {
    companyList () {
      return this.$store.getters.loadNewsAnalysis
    }
  }
}
</script>
