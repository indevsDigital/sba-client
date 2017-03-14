import * as actions from './actions'
import * as getters from './getters'

import { FETCH_CATEGORIES,
        CREATE_CATEGORY,
      DELETE_CATEGORY }
      from './mutation-types'

const initialState = {
  categories: []
}
const mutations = {
  [FETCH_CATEGORIES] (state, categories) {
    // assign the categories that we got from our FETCH_CATEGORIES event to state.all
    state.categories = categories
  },
  [CREATE_CATEGORY] (state, category) {
    state.categories.push(category)
  },
  [DELETE_CATEGORY] (state, categoryid) {
    state.all = state.all.filter(p => p.id !== categoryid)
  }
}
export default {
  state: { ...initialState },
  actions,
  getters,
  mutations
}
