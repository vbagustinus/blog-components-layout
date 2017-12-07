<template>
  <div class="article__text posisi">
    <router-link  to="admin/create" class="button is-outlined">Create Blog</router-link>
    <br/><br/>
    <table class="table">
      <thead>
        <tr>
          <th><abbr title="Position">No</abbr></th>
          <th>Title</th>
          <th colspan="2"><abbr title="Played">Actions</abbr></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(article, i) in articles":key="i">
          <th>{{i + 1}}</th>
          <td>{{ article.title }}</td>
          <td><router-link class="card-footer-item" :to="'admin/edit/'+article._id">Edit</router-link></td>
          <td><a class="card-footer-item" @click.prevent="deleteArticle(article._id)">Delete</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'Article',
  methods: {
    ...mapActions([
      'deleteArticle',
      'allArticles'
    ])
  },
  computed: {
    ...mapState([
      'articles',
      'statusLogin'
    ])
  },
  created () {
    this.allArticles()
    let parsing = localStorage.getItem('token')
    if (parsing) {
      this.is_user = parsing
    } else {
      this.$router.push('/login')
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
