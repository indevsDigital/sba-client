import * as actions from './actions'
import * as getters from './getters'

import { FETCH_PRODUCTS, CREATE_PRODUCT, UPDATE_PRODUCT, FETCH_PRODUCT }
      from './mutation-types'

const initialState = {
  products: [],
  main_products: []
}
const mutations = {
  [FETCH_PRODUCT] (state, product) {
    const index = state.main_products.findIndex(p => p.id === product.id)

    if (index === -1) {
      state.main_products.push(product)
    } else {
      state.main_products.splice(index, 1, product)
    }
  },
  [FETCH_PRODUCTS] (state, products) {
    // assign the products that we got from our FETCH_PRODUCTS event to state.products
    state.products = products
  },
  [CREATE_PRODUCT] (state, product) {
    state.main_products.push(product)
  },
  [UPDATE_PRODUCT] (state, product) {
    const index = state.main_products.findIndex((p) => p.id === product.id)

    if (index !== -1) {
      // We need to replace the array entirely so that vue can recognize
      // the change and re-render entirely.
      // See http://vuejs.org/guide/list.html#Caveats
      state.main_products.splice(index, 1, product)
    }
  }
}
export default {
  state: { ...initialState },
  actions,
  getters,
  mutations
}
