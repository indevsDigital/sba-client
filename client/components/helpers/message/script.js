import Vue from 'vue'
import Notification from 'vue-bulma-notification'
import {mapGetters} from 'vuex'
const NotificationComponent = Vue.extend(Notification)

const openNotification = (propsData = {
  title: '',
  message: '',
  type: '',
  direction: '',
  duration: 4500,
  container: '.messages'
}) => {
  return new NotificationComponent({
    el: document.createElement('div'),
    propsData
  })
}

export default {
  components: {
    Notification
  },
  computed: {
    ...mapGetters({
      message: 'getMessages'
    })
  },
  methods: {
    openNotificationWithType (type, title, message, duration) {
      openNotification({
        title: title,
        message: message,
        type: type,
        duration: duration
      })
    }

  }
}
