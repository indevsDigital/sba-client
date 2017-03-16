import { http } from 'vue'
import {FETCH_DETAILS} from './mutation-types'

export function fetchUserDetails ({ commit }, token) {
  return http.get('user-details/', {Authorization: 'JWT ' + token, showProgressBar: false})
  .then((response) => commit(FETCH_DETAILS, response.body))
}
