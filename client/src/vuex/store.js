/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

const http = axios.create(({
  baseURL: 'http://localhost:3000'
}))

Vue.use(Vuex)

const state = {
  articles: [],
  article: {},
  statusLogin: false
}

const mutations = {
  setArticles (state, allArticles) {
    state.articles = allArticles
  },
  setDetailArticle (state, Article) {
    state.article = Article
  },
  setDeleteArticle (state, id) {
    let idx = state.articles.findIndex(article => article._id == id)
    state.articles.splice(idx, 1)
  },
  setNewArticles (state, newData) {
    state.articles.unshift(newData)
  },
  setLogin (state, data) {
    state.statusLogin = data
  },
  clearLogin (state) {
    state.statusLogin = false
  }
}

const actions = {
  saveArticle ({commit}, newBlog) {
    console.log('MAUK DI BWA KES DALAM', newBlog)
    http.post('/', newBlog)
    .then(({data}) => {
      console.log('ini data yang akan di push', data.data)
      commit('setNewArticles', data.data)
    })
    .catch(err => {
      console.log(err)
    })
  },
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
  },
  updateArticle ({commit}, newData) {
    http.put(`/${newData.id}`, newData)
    .then(({data}) => {
      console.log(data)
      commit('setDetailArticle',data.data)
    })
    .catch(err => {
      console.log(err)
    })
  },
  deleteArticle ({commit}, id) {
    http.delete(`/${id}`)
    .then(() => {
      commit('setDeleteArticle', id)
    })
    .catch(err => {
      console.log(err)
    })
  },
  checkLogin ({commit},data) {
   http.post('/login', data)
    .then(function ({data}) {
      if(data.token) {
        console.log('DATA SIAPA', data)
        localStorage.setItem('token', data.token)
        localStorage.setItem('user_id', data.user_id)
        localStorage.setItem('name', data.name)
        commit('setLogin', data)
        router.push('/admin')
      } else {
        alert('Username atau Password Salah')
      }
    })
    .catch(function (error) {
      console.log(error)
    })
  },
  saveUser ({commit}, data) {
    http.post('/register', data)
    .then(function (response) {
      console.log(response)
    })
    .catch(function (error) {
      console.log(error)
    })
  },
  clearSession ({ commit }) {
    commit('clearLogin')
  },
}

const store = new Vuex.Store({
  state,
  actions,
  mutations
})

export default store