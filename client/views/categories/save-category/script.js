import Notification from 'vue-bulma-notification'
export default{
  components: {
    Notification
  },
  data () {
    return {
      category: {
        name: ''
      },
      Formerrors: {},
      error: ''
    }
  },
  methods: {
    navigate () {
      this.$router.go(window.history.back())
    },
    submit () {
      if (this.validate_form()) {
        this.category.name = ''
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
