import Vue from 'vue'
import Router from 'vue-router'

import Dashboard from '@/components/Dashboard'
import Signup from '@/components/user/Signup'
import Signin from '@/components/user/Signin'
import Settings from '@/components/user/Settings'

import About from '@/components/About'
import Page from '@/components/Page'
import Error404 from '@/components/Error404.vue'

import firebase from 'firebase'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '*',
      name: '404',
      component: Error404
    },
    {
      path: '*',
      redirect: '/404'
    },
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/page',
      name: 'Page',
      component: Page,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    }
  ],
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth && !currentUser) next('signin')
  else if (!requiresAuth && currentUser) next('/')
  else next()
})

export default router
