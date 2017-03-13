import {
  mapGetters
} from 'vuex'
export default {
  /* global  localStorage:true */
  created () {
    const token = localStorage.getItem('token')
    this.$store.dispatch('fetchProducts', token)
  },
  computed: mapGetters({
    products: 'getProducts'
  })
}
