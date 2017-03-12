<template>
  <section class="hero is-bold app-navbar animated" :class="{ slideInDown: show, slideOutDown: !show }">
    <div class="hero-head">
      <nav class="nav">
        <div class="nav-left">
          <a class="nav-item is-hidden-tablet" @click="toggleSidebar(!sidebar.opened)">
            <i class="fa fa-bars" aria-hidden="true"></i>
          </a>
        </div>
        <div class="nav-center">
          <a class="nav-item hero-brand" href="/">
            <img src="~assets/logo.svg" :alt="pkginfo.description">
            <tooltip :label="'v' + pkginfo.version" placement="right" type="success" size="small" :no-animate="true" :always="true" :rounded="true">
              <div class="is-hidden-mobile">
                <span class="vue">Small Business Analytics </Simple Business Analytics><strong class="admin">SBA</strong>
          </div>
          </tooltip>
          </a>
        </div>
        <div class="nav-right nav-menu">
        <router-link v-if="auth.authenticated" :to="{name: 'My Profile', params: { username: username } }" class="nav-item"><span class="icon"><i class="fa fa-user"></i></span>View Profile</router-link></div>
        <router-link v-if="auth.authenticated" to="/login" class="nav-item"><span class="icon"><i class="fa fa-sign-out"></i></span>Log out</router-link>
        <router-link v-if="!auth.authenticated" to="/login" class="nav-item"><span class="icon"><i class="fa fa-sign-in"></i></span>Log in</router-link></div>
      </nav>
    </div>
  </section>
</template>

<script>
import Tooltip from 'vue-bulma-tooltip'
import { mapGetters, mapActions } from 'vuex'
/* global  localStorage:true */
export default {
  components: {
    Tooltip
  },
  data () {
    return {
      'username': localStorage.getItem('username')
    }
  },
  props: {
    show: Boolean
  },

  computed: mapGetters({
    pkginfo: 'pkg',
    sidebar: 'sidebar',
    auth: 'authenticated'
  }),

  methods: mapActions([
    'toggleSidebar'
  ])
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/variables';

.app-navbar {
  position: fixed;
  min-width: 100%;
  z-index: 1024;
  box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1), 0 0 0 1px rgba(17, 17, 17, 0.1);

  .container {
    margin: auto 10px;
  }

  .nav-right {
    align-items: stretch;
    align-items: stretch;
    flex: 1;
    justify-content: flex-end;
    overflow: hidden;
    overflow-x: auto;
    white-space: nowrap;
  }
}

.hero-brand {
  .vue {
    margin-left: 10px;
    color: #36AC70;
  }
  .admin {
    color: #28374B;
  }
}
</style>
