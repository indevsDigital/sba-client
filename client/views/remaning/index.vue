<template>
  <div v-if="resource">
    <accounts
      :products="resource.results.data"
      account="sold"
      :total="resource.results.total_remaining_units.sum"></accounts>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  import Accounts from '../accounts/index.vue'
  export default {
    components: {
      Accounts
    },
    created () {
      this.$store.dispatch('fetchRemainingUnits')
    },
    computed: mapGetters({
      resource: 'getRemainigItems'
    })
  }
</script>
