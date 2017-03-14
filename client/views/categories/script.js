import {
  mapGetters
} from 'vuex'
export default {
  /* global  localStorage:true */
  created () {
    const token = localStorage.getItem('token')
    this.$store.dispatch('fetchCategories', token)
  },
  methods: {
    navigate () {
      this.$router.push({path: 'categories/add'})
    },
    delete (category) {
      const token = localStorage.getItem('token')
      this.$store.dispatch('deleteCategory', {
        'id': category.id,
        'token': token

      })
    }
  },
  computed: mapGetters({
    categories: 'getCategories'
  })
}
