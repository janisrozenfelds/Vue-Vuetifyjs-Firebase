import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import * as firebase from 'firebase'

import {firebaseConfig} from './helpers/firebaseConfig'
import { store } from './store'

// Global components
import AlertCmp from './components/shared/Alter.vue'
import AppHeader from './components/shared/Header.vue'
import AppFooter from './components/shared/Footer.vue'

Vue.use(Vuetify, { theme: {
  primary: '#0579ff', // a links
  secondary: '#424242',
  accent: '#82B1FF',
  error: '#FF5252',
  info: '#2196F3',
  success: '#4CAF50',
  warning: '#FFC107'
}})

Vue.config.productionTip = false

Vue.component('app-alert', AlertCmp)
Vue.component('app-header', AppHeader)
Vue.component('app-footer', AppFooter)

let app
firebase.initializeApp(firebaseConfig)
firebase.auth().onAuthStateChanged((user) => {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      router,
      store,
      created () {
        if (user) {
          this.$store.dispatch('autoSignIn', user)
        }
      },
      el: '#app',
      render: h => h(App)
    })
  }
})
