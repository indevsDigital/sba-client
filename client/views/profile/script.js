import {
  mapGetters
} from 'vuex'
export default {
  data () {
    return {
      personal: true,
      profile: false
    }
  },
  computed: mapGetters({
    user: 'getUserDetails'
  }),
  methods: {
    onClickpersonal () {
      this.personal = true
      this.profile = false
    },
    onClickprofile () {
      this.personal = false
      this.profile = true
    }
  }
}
