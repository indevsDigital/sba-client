import { http } from 'vue'
/* global  localStorage:true */
import {
  FETCH_PRODUCTS
} from './mutation-types'

export function fetchProducts ({ commit }) {
  return http.get('simple-products/', {Authorization: 'JWT ' + localStorage.getItem('token')})
    .then((response) => commit(FETCH_PRODUCTS, response.body))
}
