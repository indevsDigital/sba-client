import * as getters from './getters'
import * as actions from './actions'
import {SHOW_MESSAGE} from './mutation-types'

const initialstate = {
  messages: []
}
const mutations = {
  [SHOW_MESSAGE] (state, message) {
    state.messages.push({
      title: message.title,
      message: message.message,
      type: message.type,
      duration: message.duration
    })
  }
}
export default {
  state: {...initialstate},
  getters,
  actions,
  mutations
}
