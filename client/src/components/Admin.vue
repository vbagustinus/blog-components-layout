<template>
  <div class="grid__wrapper">
    <router-view 
    v-for="(article, i) in articles" 
    :key="i" 
    :article="article"
    />
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Admin',
  data () {
    return {
      articles: [],
      msg: 'Welcome to My Blog using Vue.js App'
    }
  },
  created () {
    axios.get('http://localhost:3000')
    .then(({data}) => {
      this.articles = data.articles
    })
    .catch(err => {
      console.log(err)
    })
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Amatic+SC|Montserrat|Poiret+One');
  * {
  margin: 0;
  font-family: 'Montserrat';
}

img {
  width: 100%;
}
.grid__wrapper {
  width: 900px;
  margin: 0;
}
.red {
  color: blue;
}
.article__subtitle {
  grid-area: st;
  text-align: right;
  margin: 1em 0;
  padding: 20px;
}
.article__subtitle h2 {
  font-size: 2.2em;
  padding: 0;
  margin: 0 0 -10px;
  font-weight: 900;
  opacity: 0.9;
}
.article__subtitle h3 {
  font-size: 1.3em;
  padding: 0;
  margin: 0;
  font-weight: 400;
}

.article__text {
  columns: 2;
  column-gap: 1.5em;
  column-width: 900px;
  background: whitesmoke;
  color: #444;
  padding: 50px;
}
.article__text p {
  font-weight: 100;
}
.article__text p:first-child {
  margin-top: 0;
}

/* MENU */

.menu {
  font-size: 1rem;
  padding-top: 20px;
}

.menu-list {
  line-height: 1.25;
}

.menu-list a {
  border-radius: 2px;
  color: #4a4a4a;
  display: block;
  padding: 0.5em 0.75em;
}

.menu-list a:hover {
  background-color: #3273dc;
  color: #363636;
}

.menu-list a.is-active {
  background-color: #dbdbdb;
  color: #fff;
}

.menu-list li ul {
  border-left: 1px solid #dbdbdb;
  margin: 0.75em;
  padding-left: 0.75em;
}
</style>
