import router from '../../router'

/* global  localStorage:true */

export default {
  user: {
    authenticated: false
  },
  login (context, username, password, redirect) {
    context.$http.post('api-token-auth/', JSON.stringify({'username': username, 'password': password})).then(response => {
      localStorage.setItem('token', response.body.token)
      localStorage.setItem('username', username)
      context.$store.dispatch('toggleAuth', {
        'authenticated': true,
        'username': username
      })
      context.$store.dispatch('addToMessageBus', {
        title: 'Success',
        message: `Welcome back ${username}`,
        type: 'success',
        duration: 5000
      })
      // Redirect to a specified route
      if (redirect) {
        router.push(redirect)
      }
    },
    error => {
      if (error.status === 400) {
        context.error = error.body.non_field_errors[0]
        return context.error
      }
      if (error.status === 500) {
        context.error = error.statusText
        return context.error
      }
      context.error = 'Server is offline.Please try again in a moment'
    })
  },
  register (context, email, username, password, redirect) {
    context.$http.post('auth/register/', JSON.stringify({'email': email, 'username': username, 'password': password})).then(response => {
      context.$store.dispatch('addToMessageBus', {
        title: 'Success',
        message: `You registered successfully.Now login in to start using the system`,
        type: 'success',
        duration: 5000
      })
      // Redirect to a specified route
      if (redirect) {
        router.push(redirect)
      }
    },
    error => {
      if (error.status === 400) {
        context.error = error.body.username[0]
        return context.error
      }
      if (error.status === 500) {
        context.error = error.statusText
        return context.error
      }
      context.error = 'Server is offline.Please try again in a moment'
    })
  },
  logout (context) {
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    context.$store.dispatch('toggleAuth', false)
  },
  loggedIn () {
    return !!localStorage.token
  },
   // The object to be passed as a header for authenticated requests
  getAuthHeader () {
    return 'JWT ' + localStorage.getItem('token')
  }

}
