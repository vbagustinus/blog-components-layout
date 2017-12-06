<template>
  <div>
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios'
import Article from '@/components/Article'
export default {
  name: 'Admin',
  data () {
    return {
      articles: [],
      msg: 'Welcome to My Blog using Vue.js App'
    }
  },
  components: {
    Article
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
<style >
</style>
