import {
  mapGetters, mapActions
} from 'vuex'

  /* global  localStorage:true */
export default {
  computed: mapGetters({
    user: 'getUserDetails'
  }),
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
            message: `Your Business details have been updated`,
            type: 'success',
            duration: 5000
          })
        })
    }
  }
}
// TODO: Fix vuex error mutating the store directly
