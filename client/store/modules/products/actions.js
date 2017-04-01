import Vue from 'vue'
import {
  FETCH_PRODUCTS, CREATE_PRODUCT, UPDATE_PRODUCT, FETCH_PRODUCT, DELETE_PRODUCT
} from './mutation-types'

export function fetchProducts ({ commit }, token) {
  return Vue.http.get('simple-products/', {Authorization: 'JWT ' + token})
    .then((response) => commit(FETCH_PRODUCTS, response.body))
}
export function fetchProduct ({ commit }, { productId, token }) {
  return Vue.http.get(`products/${productId}`, {Authorization: `JWT ${token}`})
    .then((response) => commit(FETCH_PRODUCT, response.body))
}
export function createProduct ({ commit }, {product, token}) {
  return Vue.http.post('products/', product, {Authorization: 'JWT ' + token})
    .then((response) => commit(CREATE_PRODUCT, response.body))
}
export function updateProduct ({ commit }, {product, token}) {
  return Vue.http.put(`products/${product.id}`, product, {Authorization: `JWT ${token}`})
    .then((response) => {
      commit(UPDATE_PRODUCT, response.body)
    })
}
export function deleteProduct ({ commit }, {
                                  id, token
                                }) {
  return Vue.http.delete(`products/${id}/`, {Authorization: `JWT ${token}`})
    .then((response) => commit(DELETE_PRODUCT, id))
}
export function saveProduct ({ commit, state }, { product, token }) {
  const index = state.products.findIndex((p) => p.id === product.id)
  if (index !== -1) {
    return updateProduct({ commit }, { product, token })
  } else {
    return createProduct({ commit }, { product, token })
  }
}
