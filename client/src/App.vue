<template>
  <div id="app">
    <section class="hero is-dark is-small">
      <!-- Hero head: will stick at the top -->
      <div class="hero-head">
        <nav class="navbar">
          <div class="container">
            <div class="navbar-brand">
              <a class="navbar-item">
                <h1 class="title">Blog Your Mind</h1>
              </a>
              <span class="navbar-burger burger" data-target="navbarMenuHeroA">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="navbarMenuHeroA" class="navbar-menu">
              <div class="navbar-end">
                <a class="navbar-item">
                  <router-link to="/">Home</router-link>
                </a>
                <a class="navbar-item" v-if="statusLogin || is_user">
                   <router-link to="/admin">Admin</router-link>
                </a>
                <a class="navbar-item" v-if="!is_user && !statusLogin">
                   <router-link to="/login">Login</router-link>
                </a>
                <a class="navbar-item" v-if="statusLogin || is_user">
                   <router-link to="/register">New Register</router-link>
                </a>
                <a class="navbar-item" v-if="statusLogin || is_user" @click="logout">
                   Logout
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="container has-text-centered">
            <router-view />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'app',
  data () {
    return {
      is_user: false
    }
  },
  methods: {
    ...mapActions([
      'clearSession'
    ]),
    logout () {
      localStorage.clear()
      this.clearSession()
      this.is_user = false
      this.$router.push('/login')
    }
  },
  computed: {
    ...mapState([
      'statusLogin'
    ])
  },
  created () {
    let parsing = localStorage.getItem('token')
    if (parsing) {
      this.is_user = parsing
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Amatic+SC|Montserrat|Poiret+One');

* {
  font-family: 'Montserrat', 'Poiret One' ,'Open Sans'!important;
}
</style>
