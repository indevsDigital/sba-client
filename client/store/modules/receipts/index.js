/**
 * Created by mugambi on 25/03/17.
 */
import * as actions from './actions'
import * as getters from './getters'
import { FETCH_RECEIPTS } from './mutation-types'

const initialState = {
  receipts: []
}
const mutations = {
  [FETCH_RECEIPTS] (state, receipts) {
    // assign the receipts that we got from our FETCH_receipts event to state.receipts
    state.receipts = receipts
  }
}
export default {
  state: { ...initialState },
  actions,
  getters,
  mutations
}
