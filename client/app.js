import Vue from 'vue'
import NProgress from 'vue-nprogress'
import Resource from 'vue-resource'
import { sync } from 'vuex-router-sync'
import App from './app/App.vue'
import router from './router'
import store from './store'
import moment from 'moment'
import { TOGGLE_SIDEBAR } from 'vuex-store/mutation-types'

/* global  localStorage:true */
Vue.use(Resource)
Vue.use(NProgress)
Vue.http.options.root = 'https://sba-api-server.herokuapp.com/api'
Vue.http.interceptors.push(function (request, next) {
  if (request.url !== 'auth/register/') {
    request.headers.set('Authorization', 'JWT ' + localStorage.getItem('token'))
  }
  // continue to next interceptor
  next()
})

Vue.http.interceptors.push(function (request, next) {
  next(function (response) {
    if (response.statusText === 'Forbidden') {
      localStorage.removeItem('token')
      localStorage.removeItem('username')
      store.dispatch('toggleAuth', false)
      router.push('/login')
    }
  })
})
Vue.http.interceptors.push(function (request, next) {
  next(function (response) {
    if (response.body[0] === 'you_have_no_business') {
      router.push('/business')
      store.dispatch('addToMessageBus', {
        title: 'Oh Snap',
        message: `You must first create a business`,
        type: 'danger',
        duration: 5000
      })
    }
  })
})
Vue.http.headers.common['Content-Type'] = 'application/json'
// Enable devtools
Vue.config.devtools = true

sync(store, router)

const nprogress = new NProgress({ parent: '.nprogress-container' })

const { state } = store

router.beforeEach((route, redirect, next) => {
  if (state.app.device.isMobile && state.app.sidebar.opened) {
    store.commit(TOGGLE_SIDEBAR, false)
  }
  next()
})

Vue.filter('formatDate', function (value) {
  if (value) {
    return moment(String(value)).format('dddd, MMMM Do YYYY, h:mm a')
  }
})
const app = new Vue({
  router,
  store,
  nprogress,
  ...App
})

export { app, router, store }
