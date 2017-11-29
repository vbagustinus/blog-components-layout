<template>
  <nav class="panel">
    <p class="panel-heading">
      Lastest Article
    </p>
    <div class="panel-block" v-for="article in articles" :key="article._id">
      <router-link :to="'/blog/'+ article._id"  >{{ article.title }}</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'WidgetArticles',
  props: ['articles']
}
</script>

<style>

</style>
