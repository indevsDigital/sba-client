import NprogressContainer from 'vue-nprogress/src/NprogressContainer'
import {
  Navbar,
  Sidebar,
  AppMain,
  FooterBar
} from '../components/layout'
import Messages from '../components/helpers/message/Message'
import {
  mapGetters,
  mapActions
} from 'vuex'
/* global  localStorage:true */
export default {
  components: {
    Navbar,
    Sidebar,
    AppMain,
    FooterBar,
    NprogressContainer,
    Messages
  },

  beforeMount () {
    const {
      body
    } = document
    const WIDTH = 768
    const RATIO = 3

    const handler = () => {
      if (!document.hidden) {
        let rect = body.getBoundingClientRect()
        let isMobile = rect.width - RATIO < WIDTH
        this.toggleDevice(isMobile ? 'mobile' : 'other')
        this.toggleSidebar(!isMobile)
      }
    }

    document.addEventListener('visibilitychange', handler)
    window.addEventListener('DOMContentLoaded', handler)
    window.addEventListener('resize', handler)
  },

  computed: mapGetters({
    sidebar: 'sidebar',
    auth: 'authenticated'
  }),
  created () {
    if (!!localStorage.token === true) {
      this.$store.dispatch('toggleAuth', true)
    }
    this.$store.dispatch('addToMessageBus', {
      title: 'Awesome',
      message: `Welcome to SBA.We are excited`,
      type: 'success',
      duration: 5000
    })
  },
  methods: mapActions([
    'toggleDevice',
    'toggleSidebar'
  ])
}
