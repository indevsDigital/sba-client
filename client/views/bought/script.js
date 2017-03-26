/**
 * Created by mugambi on 26/03/17.
 */
import { mapGetters } from 'vuex'
import Accounts from '../accounts/index.vue'
export default {
  components: {
    Accounts
  },
  created () {
    this.$store.dispatch('fetchBoughtUnits')
  },
  computed: mapGetters({
    resource: 'getBoughtItems'
  })
}
