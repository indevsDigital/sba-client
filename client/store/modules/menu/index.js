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
      meta: {
        icon: 'fa-tachometer',
        link: 'dashboard/index.vue'
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
        icon: 'fa-shopping-cart'
      },
      component: lazyLoading('pos', true)
    },
    {
      name: 'Receipts',
      path: '/receipts',
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
        icon: 'fa-money'
      },
      component: lazyLoading('receipts', true)
    },
    {
      name: 'Bought Item Accounts',
      path: '/accounts/bought',
      beforeEnter (to, from, next) {
        if (!auth.loggedIn()) {
          next({
            path: '/login',
            query: {redirect: to.path}
          })
        } else {
          next()
        }
      },
      component: lazyLoading('bought', true),
      meta: {
        icon: 'fa-tasks',
        expanded: false,
        label: 'Bought accounts'
      }
    },
    {
      name: 'Sold Item Accounts',
      path: '/accounts/sold',
      beforeEnter (to, from, next) {
        if (!auth.loggedIn()) {
          next({
            path: '/login',
            query: {redirect: to.path}
          })
        } else {
          next()
        }
      },
      component: lazyLoading('sold', true),
      meta: {
        icon: 'fa-tasks',
        expanded: false,
        label: 'sold accounts'
      }
    },
    {
      name: 'Remaining Item Accounts',
      path: '/accounts/remaining',
      beforeEnter (to, from, next) {
        if (!auth.loggedIn()) {
          next({
            path: '/login',
            query: {redirect: to.path}
          })
        } else {
          next()
        }
      },
      component: lazyLoading('remaning', true),
      meta: {
        icon: 'fa-tasks',
        expanded: false,
        label: 'Remaining accounts'
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
        icon: 'fa-cogs'
      },
      component: lazyLoading('business', true)
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
