<template>
  <div class="article__text" >
    <div class="card" v-for="article in articles" :key="article._id">
      <div class="card-image">
        <figure class="image is-4by3">
          <img src="https://bulma.io/images/placeholders/1280x960.png" :alt="article.title">
        </figure>
      </div>
      <div class="card-content">
        <div class="content">
          {{ article.article }}
        </div>
      </div>
      <hr/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainContent',
  props: ['articles']
}
</script>

<style>

</style>
