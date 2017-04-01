import * as actions from './actions'
import * as getters from './getters'

import { FETCH_CATEGORIES,
        CREATE_CATEGORY,
        UPDATE_CATEGORY,
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
  [UPDATE_CATEGORY] (state, category) {
    const index = state.categories.findIndex((p) => p.id === category.id)

    if (index !== -1) {
      // We need to replace the array entirely so that vue can recognize
      // the change and re-render entirely.
      // See http://vuejs.org/guide/list.html#Caveats
      state.categories.splice(index, 1, category)
    }
  },
  [DELETE_CATEGORY] (state, categoryid) {
    state.categories = state.categories.filter(p => p.id !== categoryid)
  }
}
export default {
  state: { ...initialState },
  actions,
  getters,
  mutations
}
