import SHOW_MESSAGE from './mutation-types'

export function addToMessageBus ({commit, state}, message) {
  commit(SHOW_MESSAGE, message)
}
