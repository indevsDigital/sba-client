import { http } from 'vue'
import { FETCH_DETAILS } from './mutation-types'

export function fetchBusiness ({ commit }, token) {
  return http.get('businesses/', {Authorization: 'JWT ' + token})
  .then((response) => commit(FETCH_DETAILS, response.body))
}
