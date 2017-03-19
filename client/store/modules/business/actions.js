import { http } from 'vue'
import { FETCH_DETAILS, UPDATE_BUSINESS, CREATE_BUSINESS } from './mutation-types'

export function fetchBusiness ({ commit }, token) {
  return http.get('businesses/', {Authorization: 'JWT ' + token})
  .then((response) => commit(FETCH_DETAILS, response.body))
}
export function createBusiness ({commit}, {business, token}) {
  return http.get('businesses/', business, {Authorization: 'JWT ' + token})
    .then((response) => commit(CREATE_BUSINESS, response.body))
}
export function updateBusiness ({ commit }, {business, token}) {
  return http.put(`businesses/${business.id}/`, business, {Authorization: `JWT ${token}`})
  .then((response) => {
    commit(UPDATE_BUSINESS, response.body)
  })
}
