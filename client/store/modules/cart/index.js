/**
 * Created by mugambi on 25/03/17.
 */
import * as getters from './getters'
import * as actions from './actions'

import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SUBTRACT_FROM_CART
} from './mutation-types'

const initialState = {
  cart: []
}

// mutations
const mutations = {
  [ADD_TO_CART] (state, product) {
    const record = state.cart.find(p => p.id === product.id)
    if (!record) {
      state.cart.push({
        id: product.id,
        name: product.product_name,
        code: product.product_code,
        price: product.unit_price,
        quantity: 1
      })
    } else {
      record.quantity++
    }
  },
  [REMOVE_FROM_CART] (state, productId) {
    state.cart = state.cart.filter(p => p.id !== productId)
  },
  [SUBTRACT_FROM_CART] (state, productId) {
    const record = state.cart.find(p => p.id === productId)
    if (record && record.quantity === 1) {
      state.cart = state.cart.filter(p => p.id !== productId)
    } else if (record) {
      record.quantity--
    }
  }
}

export default {
  state: {...initialState},
  getters,
  actions,
  mutations
}
