<template>
  <div class="article__text hero">
    <h2 class="title h2">Edit Articles</h2>
      <label class="label">Title</label>
      <p class="control has-icon has-icon-right">
        <input class="input is-dark" type="text" v-model="article.title" required>
      </p>
      <label class="label">Link Images</label>
      <p class="control has-icon has-icon-right">
        <input class="input is-dark" type="text" v-model="article.img" required>
      </p>
      <label class="label">Content</label>
      <p class="control">
        <textarea class="textarea is-dark" v-model="article.article" required></textarea>
      </p>
      <label class="label">Category</label>
      <p class="control">
        <textarea class="textarea is-dark" v-model="article.category" required></textarea>
      </p>
      <p class="control">
        <button @click="editForm" class="button is-dark">Submit</button>
        <button class="button is-light"><router-link to='/admin'>Cancel</router-link></button> 
      </p>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'EditBlog',
  props: ['id'],
  methods: {
    ...mapActions([
      'getArticleById',
      'updateArticle'
    ]),
    editForm () {
      this.updateArticle({
        ...this.article,
        id: this.id
      })
      this.$router.push('/admin')
    }
  },
  computed: {
    ...mapState([
      'article'
    ])
  },
  mounted () {
    this.getArticleById(this.id)
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
