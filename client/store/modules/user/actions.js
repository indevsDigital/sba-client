import { http } from 'vue'
import {FETCH_DETAILS, UPDATE_DETAILS_USER} from './mutation-types'

export function fetchUserDetails ({ commit }, token) {
  return http.get('user-details/', {Authorization: 'JWT ' + token, showProgressBar: false})
  .then((response) => commit(FETCH_DETAILS, response.body))
}
export function updateUser ({ commit }, {user, token}) {
  return http.put(`users/${user.id}/`, user, {Authorization: `JWT ${token}`})
    .then((response) => {
      commit(UPDATE_DETAILS_USER, response.body)
    })
}
