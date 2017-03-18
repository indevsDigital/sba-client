import {
   mapGetters, mapActions
} from 'vuex'

  /* global  localStorage:true */
export default {
  data () {
    return {
      user: {
        business: {
          name: '',
          county: '',
          owner: '',
          city: '',
          street: ''
        }
      }
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      if (this.$store.getters.getUserDetails) {
        this.user = this.$store.getters.getUserDetails
      }
    },
    ...mapActions([
      'updateBusiness'
    ]),
    onUpdate (Business) {
      const token = localStorage.getItem('token')
      this.updateBusiness({'business': Business, 'token': token})
        .then(() => {
          this.$store.dispatch('addToMessageBus', {
            title: 'Success',
            message: `Your Business details have been updated successfully`,
            type: 'success',
            duration: 5000
          })
        })
    }
  }
}
// TODO: Fix vuex error mutating the store directly
