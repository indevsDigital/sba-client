/**
 * Created by mugambi on 26/03/17.
 */
import lazyLoading from './lazyLoading'
import auth from '../../../views/auth/auth'

export default {
  children: [
    {
      name: 'Bought',
      path: '/bought',
      meta: {
        link: 'accounts/bought'
      },
      component: lazyLoading('accounts/bought/index')
    },
    {
      name: 'Sold',
      path: 'sold',
      meta: {
        link: 'accounts/sold.vue'
      }
    },
    {
      name: 'Remaining',
      path: 'remaining',
      meta: {
        link: 'accounts/remaining.vue'
      }
    }
  ],

}
