import { http } from 'vue'
import {
  FETCH_CATEGORIES,
  CREATE_CATEGORY,
  DELETE_CATEGORY
} from './mutation-types'

export function fetchCategories ({ commit }, token) {
  return http.get('categories/', {Authorization: 'JWT ' + token})
    .then((response) => commit(FETCH_CATEGORIES, response.body))
}
export function createCategory ({ commit }, {category, token}) {
  return http.post('categories/', category, { Authorization: 'JWT ' + token })
    .then((response) => {
      commit(CREATE_CATEGORY, response.body)
    })
}
export function deleteCategory ({ commit }, {
  id, token
}) {
  return http.delete(`categories/${id}`)
    .then((response) => commit(DELETE_CATEGORY, id))
}
