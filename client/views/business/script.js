import {
   mapActions
} from 'vuex'

  /* global  localStorage:true */
export default {
  data () {
    return {
      business: [{
        id: null,
        name: '',
        county: '',
        city: '',
        street: ''
      }]
    }
  },
  created () {
    const token = localStorage.getItem('token')
    this.$store.dispatch('fetchBusiness', token).then(() => {
      const business = this.$store.getters.getBusiness
      if (business.length > 0) {
        this.business = {...business}
      }
    })
  },
  methods: {
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
