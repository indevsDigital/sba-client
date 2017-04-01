/**
 * Created by mugambi on 26/03/17.
 */
import * as actions from './actions'
import * as getters from './getters'
import {BOUGHT_UNITS, SOLD_UNITS, REMAINING_ITEMS} from './mutation-types'

const initialState = {
  accounts: {
    bought: null,
    remaining: null,
    sold: null
  }
}
const mutations = {
  [BOUGHT_UNITS] (state, bought) {
    // assign the bought that we got from our fetchBought event to state.bought
    state.accounts.bought = bought
  },
  [REMAINING_ITEMS] (state, remaining) {
    // assign the bought that we got from our fetchBought event to state.bought
    state.accounts.remaining = remaining
  },
  [SOLD_UNITS] (state, sold) {
    // assign the bought that we got from our fetchBought event to state.bought
    state.accounts.sold = sold
  }
}
export default {
  state: { ...initialState },
  actions,
  getters,
  mutations
}
