<template>
  <div class="article__text posisi">
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
          <td><router-link class="card-footer-item" :to="'blog/edit/'+article._id">Edit</router-link></td>
          <td> <router-link class="card-footer-item" :to="'blog/delete/'+article._id">Delete</router-link></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Article',
  props: ['articles']
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
