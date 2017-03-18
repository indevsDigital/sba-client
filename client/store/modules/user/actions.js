import { http } from 'vue'
import {FETCH_DETAILS, UPDATE_BUSINESS} from './mutation-types'

export function fetchUserDetails ({ commit }, token) {
  return http.get('user-details/', {Authorization: 'JWT ' + token, showProgressBar: false})
  .then((response) => commit(FETCH_DETAILS, response.body))
}

export function updateBusiness ({ commit }, {business, token}) {
  return http.put(`businesses/${business.id}/`, business, {Authorization: `JWT ${token}`})
  .then((response) => {
    commit(UPDATE_BUSINESS, response.body)
  })
}
