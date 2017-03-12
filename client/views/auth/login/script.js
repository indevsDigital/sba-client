import auth from '../auth'
import Notification from 'vue-bulma-notification'
export default{
  components: {
    Notification
  },
  data () {
    return {
      credentials: {
        username: '',
        password: ''
      },
      Formerrors: {},
      error: ''
    }
  },
  created () {
    auth.logout(this)
  },
  methods: {
    navigate () {
      this.$router.push({path: 'register'})
    },
    submit () {
      if (this.validate_form()) {
        auth.login(this, this.credentials.username, this.credentials.password, 'dashboard')
        this.credentials.username = ''
        this.credentials.password = ''
      }
    },
    validate_form () {
      const errors = {}
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
