/**
 * Created by mugambi on 25/03/17.
 */
import Vue from 'vue'
import { FETCH_RECEIPTS } from './mutation-types'
export function fetchReceipts ({ commit }) {
  return Vue.http.get('receipts/')
    .then((response) => commit(FETCH_RECEIPTS, response.body))
}
