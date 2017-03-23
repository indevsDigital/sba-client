import Vue from 'vue'
import Resource from 'vue-resource'
import NProgress from 'vue-nprogress'
import { sync } from 'vuex-router-sync'
import App from './app/App.vue'
import router from './router'
import store from './store'
import * as filters from './filters'
import { TOGGLE_SIDEBAR } from 'vuex-store/mutation-types'
/* global  localStorage:true */
Vue.use(Resource)
Vue.use(NProgress)
Vue.http.options.root = 'https://sba-api-server.herokuapp.com/api'
Vue.http.headers.common['Authorization'] = 'JWT ' + localStorage.getItem('token') || ''
Vue.http.interceptors.push(function (request, next) {
  next(function (response) {
    if (response.status === 403) {
      localStorage.removeItem('token')
      localStorage.removeItem('username')
      store.dispatch('toggleAuth', false)
      router.go('/login')
    }
  })
})
Vue.http.interceptors.push(function (request, next) {
  next(function (response) {
    if (response.body[0] === 'You do not have business yet') {
      router.push('/business')
    }
  })
})
Vue.http.headers.common['Content-Type'] = 'application/json'
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

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

const app = new Vue({
  router,
  store,
  nprogress,
  ...App
})

export { app, router, store }
