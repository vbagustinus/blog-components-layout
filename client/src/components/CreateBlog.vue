<template>
  <div class="article__text hero">
    <h2 class="title h2">Create Articles</h2>
      <label class="label">Title</label>
      <p class="control has-icon has-icon-right">
        <input class="input is-dark" type="text" v-model="article.title" placeholder="insert title" required>
      </p>
      <label class="label">Link Images</label>
      <p class="control has-icon has-icon-right">
        <input class="input is-dark" type="text" v-model="article.img" placeholder="Insert your image link" required>
      </p>
      <label class="label">Content</label>
      <p class="control">
        <textarea class="textarea is-dark" v-model="article.article" placeholder="Write your content" required></textarea>
      </p>
      <label class="label">Category</label>
      <p class="control">
        <input class="input is-dark" type="text" v-model="article.category" placeholder="insert category" required>
      </p>
      <p class="control">
        <button @click="saveForm" class="button is-dark">Create</button>
        <button class="button is-light"><router-link to='/admin'>Cancel</router-link></button> 
      </p>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'CreateBlog',
  data () {
    return {
      article: {
        title: '',
        img: '',
        article: '',
        category: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'saveArticle'
    ]),
    saveForm () {
      // console.log(this.article)
      this.saveArticle({
        ...this.article
      })
      this.$router.push('/admin')
    }
  }
}
</script>

<style>
  .article__text{
    text-align: left;
    margin: 0 100px 0 100px;
    padding: 30px;
    color: #000;
  }
  .h2 {
    color: #000!important;
  }
</style>
