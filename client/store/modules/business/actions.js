import Vue from 'vue'
import { FETCH_DETAILS, UPDATE_BUSINESS, CREATE_BUSINESS } from './mutation-types'
export function fetchBusiness ({ commit }) {
  return Vue.http.get('businesses/')
  .then((response) => {
    commit(FETCH_DETAILS, response.body)
  }, (error) => {
    console.log(error.body.detail)
  })
}
export function createBusiness ({commit}, {business}) {
  return Vue.http.post('businesses/', business)
    .then((response) => commit(CREATE_BUSINESS, response.body))
}
export function updateBusiness ({ commit }, {business}) {
  return Vue.http.put(`businesses/${business.id}/`, business)
  .then((response) => {
    commit(UPDATE_BUSINESS, response.body)
  })
}
export function saveBusiness ({commit, state}, {business}) {
  const index = state.business.findIndex((b) => b.id === business.id)
  if (index !== -1) {
    return updateBusiness({commit}, {business})
  } else {
    return createBusiness({commit}, {business})
  }
}
