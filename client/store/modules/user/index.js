import * as actions from './actions'
import * as getters from './getters'
import {FETCH_DETAILS, UPDATE_BUSINESS} from './mutation-types'

const initialState = {
  user: []
}
const mutations = {
  [FETCH_DETAILS] (state, user) {
    state.user = user
  },
  [UPDATE_BUSINESS] (state, business) {
    const index = state.user.business.id === business.id

    if (index !== -1) {
      // We need to replace the object entirely so that vue can recognize
      // the change and re-render entirely.
      // See http://vuejs.org/guide/list.html#Caveats
      state.user.business = business
    }
  }
}
export default {
  state: { ...initialState },
  actions,
  getters,
  mutations
}
