/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const http = axios.create(({
  baseURL: 'http://localhost:3000'
}))

Vue.use(Vuex)

const state = {
  articles: [],
  article: {}
}

const mutations = {
  setArticles (state, allArticles) {
    state.articles = allArticles
  },
  setDetailArticle (state, Article) {
    state.article = Article
  }
}

const actions = {
  allArticles ({ commit }) {
    http.get('/')
    .then(({data}) => {
      console.log('ini data', data)
      commit('setArticles', data.articles)
    })
    .catch(err => {
      console.log(err)
    })
  },
  getArticleById ({commit}, id) {
    http.get(`/blog/${id}`)
    .then(({data}) => {
      console.log(data.data)
      commit('setDetailArticle',data.data)
    })
    .catch(err => {
      console.log(err)
    })
  }
}

const store = new Vuex.Store({
  state,
  actions,
  mutations
})

export default store