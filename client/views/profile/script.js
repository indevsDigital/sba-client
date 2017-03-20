import {
  mapGetters,mapActions
} from 'vuex'
const initialData = () => {
  return {
    userInForm: {
      email: '',
      first_name: '',
      id: null,
      last_name: '',
      username: ''
    },
    profileInForm: {
      avatar: '',
      national_id: '',
      phone_number: '',
      user: ''
    },
    personal: true,
    profile: false
  }
}
export default {
  data: initialData,
  computed: mapGetters({
    user: 'getUserDetails'
  }),
  created () {
    this.onEditUser(this.user.User)
  },
  methods: {
    ...mapActions([
      'updateUser'
    ]),
    onClickpersonal () {
      this.personal = true
      this.profile = false
      this.onEditUser(this.user.User)
    },
    onUpdateUser (user) {
      const token = localStorage.getItem('token')
      this.updateUser({'user':user,'token':token}).then(() => {
        this.$store.dispatch('addToMessageBus', {
          title: 'Success',
          message: `Your user details have been updated sucessfully`,
          type: 'success',
          duration: 5000
        })
      })
    },
    onEditProfile(profile) {
      this.profileInForm = {...profile}
    },
    onEditUser(user) {
      this.userInForm = {...user}
    },
    onClickprofile () {
      this.personal = false
      this.profile = true
      this.onEditProfile(this.user.profile)
    }
  }
}
