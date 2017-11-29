<template>
  <div class="article__text">
    <div v-if="detail" class="article__subtitle">
      <h2 class="red">{{ detail.title }}</h2>
    </div>
    {{ detail.article }}
    <br/>
    <hr/>
    {{ detail.category }}
  </div>
  
</template>

<script>
import axios from 'axios'
export default {
  name: 'DetailArticle',
  data () {
    return {
      detail: ''
    }
  },
  props: ['id'],
  methods: {
    getArticleById (id) {
      axios.get(`http://localhost:3000/blog/${id}`)
      .then(({data}) => {
        console.log(data.data)
        this.detail = data.data
      })
      .catch(err => {
        console.log(err)
      })
    }
  },
  mounted () {
    this.getArticleById(this.id)
  },
  watch: {
    id (newView) {
      this.getArticleById(newView)
    }
  }
}
</script>

<style>

</style>
