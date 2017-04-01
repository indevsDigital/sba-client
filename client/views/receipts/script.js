/**
 * Created by mugambi on 25/03/17.
 */
import Vue from 'vue'
import {mapGetters} from 'vuex'
export default {
  created () {
    this.$store.dispatch('fetchReceipts')
  },
  computed: mapGetters({
    receipts: 'getReceipts'
  })
}
