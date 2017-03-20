/**
 * Created by mugambi on 20/03/17.
 */
export default {
  props: ['business'],
  data () {
    return {
      FormErrors: {}
    }
  },
  methods: {
    onCancel () {
      this.FormErrors = {}
      this.$emit('cancel')
    },
    onSubmit () {
      if (this.validate_form()) {
        this.$emit('submit', this.business)
      }
    },
    validate_form () {
      const errors = {}
      if (!this.business.name) {
        errors.name = 'Name is required'
      }
      if (!this.business.county) {
        errors.county = 'County is required'
      }
      if (!this.business.city) {
        errors.city = 'City is required'
      }
      if (!this.business.street) {
        errors.street = 'Street is required'
      }
      this.FormErrors = errors
      return Object.keys(errors).length === 0
    }
  }
}
