import { http } from 'vue'
import {
  FETCH_PRODUCTS
} from './mutation-types'

export function fetchProducts ({ commit }, token) {
  return http.get('simple-products/', {Authorization: 'JWT ' + token})
    .then((response) => commit(FETCH_PRODUCTS, response.body))
}
