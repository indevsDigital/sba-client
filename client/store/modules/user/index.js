import * as actions from './actions'
import * as getters from './getters'
import {FETCH_DETAILS, UPDATE_DETAILS_USER} from './mutation-types'

const initialState = {
  user: []
}
const mutations = {
  [FETCH_DETAILS] (state, user) {
    state.user = user
  },
  [UPDATE_DETAILS_USER] (state, user) {
    state.user.User = user
  }
}
export default {
  state: { ...initialState },
  actions,
  getters,
  mutations
}
