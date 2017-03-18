import Vue from 'vue'
import Vuex from 'vuex'
import pkg from 'package'
import * as actions from './actions'
import * as getters from './getters'

import app from './modules/app'
import menu from './modules/menu'
import messages from './modules/messages'
import products from './modules/products'
import categories from './modules/categories'
import user from './modules/user'
import business from './modules/business'
Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,  // process.env.NODE_ENV !== 'development',
  actions,
  getters,
  modules: {
    app,
    menu,
    messages,
    products,
    categories,
    user,
    business
  },
  state: {
    pkg
  },
  mutations: {
  }
})

export default store
