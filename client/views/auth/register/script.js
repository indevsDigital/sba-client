import auth from '../auth'
import Notification from 'vue-bulma-notification'
export default{
  components: {
    Notification
  },
  data () {
    return {
      credentials: {
        email: '',
        username: '',
        password: ''
      },
      Formerrors: {},
      error: ''
    }
  },
  methods: {
    navigate () {
      this.$router.push({path: 'login'})
    },
    submit () {
      if (this.validate_form()) {
        auth.register(this, this.credentials.email, this.credentials.username, this.credentials.password, '/')
        this.credentials.email = ''
        this.credentials.username = ''
        this.credentials.password = ''
      }
    },
    validate_form () {
      const errors = {}
      if (!this.credentials.email) {
        errors.email = 'Email is required'
      }
      if (!this.credentials.username) {
        errors.username = 'Username is required'
      }
      if (!this.credentials.password) {
        errors.password = 'Password is required'
      }
      this.Formerrors = errors
      return Object.keys(errors).length === 0
    }
  }
}
