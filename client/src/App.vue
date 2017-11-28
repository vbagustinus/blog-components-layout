<template>
  <div id="app">
    <nav>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/blog">Article</router-link>
        </li>
        <li>
          <router-link to="/admin">Admin</router-link>
        </li>
        <li>
          <router-link to="/login">Login</router-link>
        </li>
        <li>
          <router-link to="/register">Register</router-link>
        </li>
      </ul>
    </nav>
    <div class="grid__wrapper">
      <router-view 
        @saveuser="saveUser" 
        @checklogin="checkLogin"
        @create-article="createArticle"
      />
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'app',
    methods: {
      saveUser (data) {
        axios.post('http://localhost:3000/register', data)
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
      },
      checkLogin (data) {
        axios.post('http://localhost:3000/login', data)
        .then(function ({data}) {
          console.log('DATA SIAPA', data)
        })
        .catch(function (error) {
          console.log(error)
        })
      },
      createArticle (data) {
        axios.post('http://localhost:3000', data)
        .then(function (data) {
          console.log('DATA SIAPA', data)
        })
        .catch(function (error) {
          console.log(error)
        })
      }
    }
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Amatic+SC|Montserrat|Poiret+One');

html {
  height:100%;
  background-image: linear-gradient(to right top, #8e44ad 0%, #3498db 100%);
  padding-top: 0;
  margin-top: 0;
}

nav {
  max-width: 960px;
  mask-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #ffffff 25%, #ffffff 75%, rgba(255, 255, 255, 0) 100%);
  margin: 0 auto;
  padding:0;
}

nav ul {
  text-align: center;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 25%, rgba(255, 255, 255, 0.2) 75%, rgba(255, 255, 255, 0) 100%);
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.1), inset 0 0 1px rgba(255, 255, 255, 0.6);
}

nav ul li {
  display: inline-block;
}

nav ul li a {
  padding: 18px;
  font-family: 'Montserrat', 'Poiret One' ,'Open Sans';
  font-size: 20px;
  /* text-transform:uppercase; */
  color: rgba(0, 35, 122, 0.5);
  font-size: 18px;
  text-decoration: none;
  display: block;
}

nav ul li a:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1), inset 0 0 1px rgba(255, 255, 255, 0.6);
  background: rgba(255, 255, 255, 0.1);
  color: rgba(0, 35, 122, 0.7);
}
.grid__wrapper {
  display: grid;
  grid-template-rows: auto;
  grid-template-areas: "t t t" ". st st" ". t1 t1" "i i i" "t2 t2 .";
  max-width: 968px;
  margin: auto;
}
</style>
