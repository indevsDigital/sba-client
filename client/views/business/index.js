/**
 * Created by mugambi on 20/03/17.
 */
import {
  mapGetters,
  mapActions
} from 'vuex'
import SaveForm from './save-form.vue'
const initialData = () => {
  return {
    businessInForm: {
      id: null,
      owner: null,
      name: '',
      county: '',
      city: '',
      street: ''
    },
    edit: false,
    add: true
  }
}
/* global  localStorage:true */
export default {
  components: {
    SaveForm
  },
  data: initialData,
  created () {
    const token = localStorage.getItem('token')
    this.$store.dispatch('fetchBusiness', token).then(() => {
      if (this.business.length > 0) {
        this.onEditBusiness(this.business[0])
      }
    })
  },
  methods: {
    ...mapActions([
      'saveBusiness'
    ]),
    owner () {
      return `http://127.0.0.1:8000/api/users/${this.user.User.id}/`
    },
    onFormSubmit (business) {
      const token = localStorage.getItem('token')
      this.saveBusiness({
        'business': {
          'id': business.id,
          'name': business.name,
          'county': business.county,
          'owner': this.owner(),
          'city': business.city,
          'street': business.street
        }, 'token': token
      }).then(() => {
        this.$store.dispatch('addToMessageBus', {
          title: 'Success',
          message: `Your Business details have been updated successfully`,
          type: 'success',
          duration: 5000
        })
        this.edit = false
        this.add = false
      })
    },
    resetBusinessInForm () {
      this.add = false
      this.edit = false
    },
    editbusiness () {
      this.edit = true
    },
    onEditBusiness (business) {
      this.businessInForm = {...business}
    }
  },
  computed: mapGetters({
    business: 'getBusiness',
    user: 'getUserDetails'
  })
}
