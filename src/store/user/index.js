import * as firebase from 'firebase'

export default {
  // Current state of the application lies here.
  state: {
    user: null
  },
  // Compute derived state based on the current state.
  // More like computed property.
  getters: {
    user (state) {
      return state.user
    }
  },
  // Mutate the current state
  mutations: {
    setUser (state, payload) {
      state.user = payload
    }
  },
  // Get data from server and send that to mutations
  // to mutate the current state
  actions: {
    signUserUp ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then(
        user => {
          commit('setLoading', false)
          const newUser = {
            id: user.uid,
            name: user.displayName,
            email: user.email,
            photoUrl: user.photoURL
          }
          commit('setUser', newUser)
        }
      )
      .catch(
        error => {
          commit('setLoading', false)
          commit('setError', error)
          console.log(error)
        }
      )
    },
    signUserIn ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then(
        user => {
          commit('setLoading', false)
          const newUser = {
            id: user.uid,
            name: user.displayName,
            email: user.email,
            photoUrl: user.photoURL
          }
          commit('setUser', newUser)
        }
      )
      .catch(
        error => {
          commit('setLoading', false)
          commit('setError', error)
          console.log(error)
        }
      )
    },
    autoSignIn ({commit}, payload) {
      commit('setUser', {
        id: payload.uid,
        name: payload.displayName,
        email: payload.email,
        photoUrl: payload.photoURL
      })
    },
    // User logout
    logout ({commit}) {
      firebase.auth().signOut()
      commit('setUser', null)
    }
  }
}
