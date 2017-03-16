import * as actions from './actions'
import * as getters from './getters'
import {FETCH_DETAILS} from './mutation-types'

const initialState = {
  user: []
}
const mutations = {
  [FETCH_DETAILS] (state, user) {
    state.user = user
  }
}
export default {
  state: { ...initialState },
  actions,
  getters,
  mutations
}
