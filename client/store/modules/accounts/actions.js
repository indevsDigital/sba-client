/**
 * Created by mugambi on 26/03/17.
 */

import {BOUGHT_UNITS, SOLD_UNITS, REMAINING_ITEMS} from './mutation-types'
import Vue from 'vue'
export function fetchBoughtUnits ({ commit }) {
  return Vue.http.get('accounts/bought/')
    .then((response) => commit(BOUGHT_UNITS, response.body))
}
export function fetchSoldtUnits ({ commit }) {
  return Vue.http.get('accounts/sold/')
    .then((response) => commit(SOLD_UNITS, response.body))
}
export function fetchRemainingUnits ({ commit }) {
  return Vue.http.get('accounts/remaining/')
    .then((response) => commit(REMAINING_ITEMS, response.body))
}
