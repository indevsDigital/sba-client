import { http } from 'vue'
import {
  FETCH_CATEGORIES,
  CREATE_CATEGORY
} from './mutation-types'

export function fetchCategories ({ commit }, token) {
  return http.get('categories/', {Authorization: 'JWT ' + token})
    .then((response) => commit(FETCH_CATEGORIES, response.body))
}
export function createCategory ({ commit }, category) {
  return http.post('products', category)
    .then((response) => {
      commit(CREATE_CATEGORY, response.body)
    })
}
