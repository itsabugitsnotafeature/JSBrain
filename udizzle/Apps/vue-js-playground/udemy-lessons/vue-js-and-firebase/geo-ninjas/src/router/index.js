import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'
import GMap from '@/components/home/GMap'
import Signup from '@/components/auth/Signup'
import Login from '@/components/auth/Login'
import ViewProfile from '@/components/profile/ViewProfile'

Vue.use(Router)
/* eslint-disable */

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'GMap',
      component: GMap,
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
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/profile/:id',
      name: 'ViewProfile',
      component: ViewProfile,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  // check to see if route requires Auth
  if(to.matched.some(rec => rec.meta.requiresAuth)){
    // check Auth state of user
    let user = firebase.auth().currentUser
    if(user) {
      // user signed in, proceed to route
      next()
    } else {
      // no user signed in, redirect to login
      console.error('Login required to access page!')
      next({name: 'Login'})
    }
  } else {
    next()
  }
})

export default router