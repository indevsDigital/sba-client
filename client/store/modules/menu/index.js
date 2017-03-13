import * as types from '../../mutation-types'
import lazyLoading from './lazyLoading'

// show: meta.label -> name
// name: component name
// meta.label: display label

const state = {
  items: [
    {
      name: 'Dashboard',
      path: '/dashboard',
      meta: {
        icon: 'fa-tachometer'
      },
      component: lazyLoading('dashboard', true)
    },
    {
      name: 'Inventory',
      path: '/inventory',
      meta: {
        icon: 'fa-table'
      },
      component: lazyLoading('inventory', true)
    },
    {
      name: 'P.O.S',
      path: '/pos',
      meta: {
        icon: 'fa-usd'
      }
    },
    {
      name: 'Accounts',
      path: '/accounts',
      meta: {
        icon: 'fa-tasks'
      }
    },
    {
      name: 'Manage Business',
      path: '/business',
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
