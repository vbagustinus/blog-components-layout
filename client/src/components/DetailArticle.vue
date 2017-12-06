<template>
  <div class="article__text">
    <div v-if="article" class="article__subtitle">
      <h2 class="red">{{ article.title }}</h2>
    </div>
    {{ article.article }}
    <br/>
    <hr/>
    {{ article.category }}
  </div>
  
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'DetailArticle',
  props: ['id'],
  methods: {
    ...mapActions([
      'getArticleById'
    ])
  },
  computed: {
    ...mapState([
      'article'
    ])
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
