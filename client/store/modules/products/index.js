import * as actions from './actions'
import * as getters from './getters'

import { FETCH_PRODUCTS }
      from './mutation-types'

const initialState = {
  products: []
}
const mutations = {
  [FETCH_PRODUCTS] (state, products) {
    // assign the products that we got from our FETCH_PRODUCTS event to state.all
    state.products = products
  }
}
export default {
  state: { ...initialState },
  actions,
  getters,
  mutations
}
