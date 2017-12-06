<template>
  <div class="box article__text">
    <div v-for="article in articles" :key="article._id">
      <article class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            <img src="https://bulma.io/images/placeholders/128x128.png" :alt="article.title">
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>{{ article.title }}</strong> <small>@johnsmith</small> <small>31m</small>
              <br>
              {{ article.article }}
            </p>
          </div>
        </div>
      </article>
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
