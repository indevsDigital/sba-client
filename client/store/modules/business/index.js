import * as actions from './actions'
import * as getters from './getters'
import { FETCH_DETAILS } from './mutation-types'

const initialState = {
  business: []
}
const mutations = {
  [FETCH_DETAILS] (state, business) {
    state.business = business
  }
}
export default {
  state: { ...initialState },
  actions,
  getters,
  mutations
}
