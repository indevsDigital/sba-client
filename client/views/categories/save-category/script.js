export default{
  props: ['category', 'user'],
  data () {
    return {
      Formerrors: {}
    }
  },
  watch: {
    'category.id' () {
      this.Formerrors = {}
    }
  },
  methods: {
    navigate () {

    },
    onCancel () {
      this.Formerrors = {}
      this.$emit('cancel')
    },
    onSubmit () {
      if (this.validate_form()) {
        this.$emit('submit', this.category)
      }
    },
    validate_form () {
      const errors = {}
      if (!this.category.name) {
        errors.name = 'Name is required'
      }
      this.Formerrors = errors
      return Object.keys(errors).length === 0
    }
  }
}
