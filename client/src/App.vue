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
                <a class="navbar-item">
                   <router-link to="/admin">Admin</router-link>
                </a>
                <a class="navbar-item">
                   <router-link to="/login">Login</router-link>
                </a>
                <a class="navbar-item">
                   <router-link to="/register">Register</router-link>
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
  import axios from 'axios'
  export default {
    name: 'app'
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Amatic+SC|Montserrat|Poiret+One');

* {
  font-family: 'Montserrat', 'Poiret One' ,'Open Sans'!important;
}
</style>
