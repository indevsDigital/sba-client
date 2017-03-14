import * as types from '../../mutation-types'
import lazyLoading from './lazyLoading'
import auth from '../../../views/auth/auth'
// show: meta.label -> name
// name: component name
// meta.label: display label

const state = {
  items: [
    {
      name: 'Dashboard',
      path: '/dashboard',
      beforeEnter (to, from, next) {
        if (!auth.loggedIn()) {
          next({
            path: '/login',
            query: { redirect: to.path }
          })
        } else {
          next()
        }
      },
      meta: {
        icon: 'fa-tachometer'
      },
      component: lazyLoading('dashboard', true)
    },
    {
      name: 'Categories',
      path: '/categories',
      beforeEnter (to, from, next) {
        if (!auth.loggedIn()) {
          next({
            path: '/login',
            query: { redirect: to.path }
          })
        } else {
          next()
        }
      },
      meta: {
        icon: 'fa-tags'
      },
      component: lazyLoading('categories', true)
    },
    {
      name: 'Inventory',
      path: '/inventory',
      beforeEnter (to, from, next) {
        if (!auth.loggedIn()) {
          next({
            path: '/login',
            query: { redirect: to.path }
          })
        } else {
          next()
        }
      },
      meta: {
        icon: 'fa-table'
      },
      component: lazyLoading('inventory', true)
    },
    {
      name: 'P.O.S',
      path: '/pos',
      beforeEnter (to, from, next) {
        if (!auth.loggedIn()) {
          next({
            path: '/login',
            query: { redirect: to.path }
          })
        } else {
          next()
        }
      },
      meta: {
        icon: 'fa-usd'
      }
    },
    {
      name: 'Accounts',
      path: '/accounts',
      beforeEnter (to, from, next) {
        if (!auth.loggedIn()) {
          next({
            path: '/login',
            query: { redirect: to.path }
          })
        } else {
          next()
        }
      },
      meta: {
        icon: 'fa-tasks'
      }
    },
    {
      name: 'Manage Business',
      path: '/business',
      beforeEnter (to, from, next) {
        if (!auth.loggedIn()) {
          next({
            path: '/login',
            query: { redirect: to.path }
          })
        } else {
          next()
        }
      },
      meta: {
        icon: 'fa-tasks'
      }
    }
  ]
}

const mutations = {
  [types.EXPAND_MENU] (state, menuItem) {
    if (menuItem.index > -1) {
      if (state.items[menuItem.index] && state.items[menuItem.index].meta) {
        state.items[menuItem.index].meta.expanded = menuItem.expanded
      }
    } else if (menuItem.item && 'expanded' in menuItem.item.meta) {
      menuItem.item.meta.expanded = menuItem.expanded
    }
  }
}

export default {
  state,
  mutations
}
