import * as actions from './actions'
import * as getters from './getters'
import { FETCH_DETAILS, UPDATE_BUSINESS, CREATE_BUSINESS } from './mutation-types'

const initialState = {
  business: []
}

const mutations = {
  [FETCH_DETAILS] (state, business) {
    state.business = business
  },
  [CREATE_BUSINESS] (state, business) {
    state.business.push(business)
  },
  [UPDATE_BUSINESS] (state, business) {
    const index = state.business.findIndex((p) => p.id === business.id)

    if (index !== -1) {
      // We need to replace the array entirely so that vue can recognize
      // the change and re-render entirely.
      // See http://vuejs.org/guide/list.html#Caveats
      state.business.splice(index, 1, business)
    }
  }
}
export default {
  state: { ...initialState },
  actions,
  getters,
  mutations
}
