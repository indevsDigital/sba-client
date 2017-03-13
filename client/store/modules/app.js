import * as types from '../mutation-types'

const state = {
  device: {
    isMobile: false,
    isTablet: false
  },
  sidebar: {
    opened: false,
    hidden: false
  },
  effect: {
    translate3d: true
  },
  auth: {
    authenticated: false,
    username: ''
  }
}

const mutations = {
  [types.TOGGLE_DEVICE] (state, device) {
    state.device.isMobile = device === 'mobile'
    state.device.isTablet = device === 'tablet'
  },

  [types.TOGGLE_SIDEBAR] (state, opened) {
    if (state.device.isMobile) {
      state.sidebar.opened = opened
    } else {
      state.sidebar.opened = true
    }
  },

  [types.SWITCH_EFFECT] (state, effectItem) {
    for (let name in effectItem) {
      state.effect[name] = effectItem[name]
    }
  },
  [types.TOGGLE_AUTHENTICATED] (state, auth) {
    state.auth.authenticated = auth.authenticated
    state.auth.username = auth.username
  }
}

export default {
  state,
  mutations
}
