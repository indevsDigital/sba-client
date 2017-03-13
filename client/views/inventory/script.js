export default {
  created () {
    this.$store.dispatch('fetchProducts')
  }
}
