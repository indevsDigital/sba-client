import Notification from 'vue-bulma-notification'
  /* global  localStorage:true */
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
        const token = localStorage.getItem('token')
        const name = JSON.stringify({'name': this.category.name})
        this.$store.dispatch('createCategory', {
          'category': name,
          'token': token})
        this.$router.push({path: '/categories'})
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
