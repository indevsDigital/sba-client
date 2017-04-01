/**
 * Created by mugambi on 23/03/17.
 */
export default {
  props: ['product', 'categories'],
  data () {
    return {
      FormErrors: {}
    }
  },
  watch: {
    'product.id' () {
      this.Formerrors = {}
    }
  },
  methods: {
    onCancel () {
      this.FormErrors = {}
      this.$emit('cancel')
    },
    onSubmit () {
      if (this.validate_form()) {
        this.$emit('save', this.product)
      }
    },
    validate_form () {
      const errors = {}
      if (!this.product.product_name) {
        errors.name = 'Name is required'
      }
      if (!this.product.product_code) {
        errors.product_code = 'The code is required'
      }
      if (!this.product.product_category) {
        errors.category = 'Category is required'
      }
      if (!this.product.unit_price) {
        errors.unit_price = 'Unit Price is required'
      }
      if (!this.product.total_inital_units) {
        errors.total_inital_units = 'Initial count of products  required'
      }
      if (!this.product.expires_on) {
        errors.expires_on = 'Expiry date required'
      }
      if (!this.product.available_units) {
        errors.available_units = 'Available units required'
      }
      this.FormErrors = errors
      return Object.keys(errors).length === 0
    }
  }
}
