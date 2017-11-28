import Vue from 'vue'
import Router from 'vue-router'
import Content from '@/components/Content'
import Intro from '@/components/Intro'
import Create from '@/components/Create'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Article from '@/components/Article'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Into',
      component: Intro
    },
    {
      path: '/blog',
      name: 'Content',
      component: Content
    },
    {
      path: '/admin',
      component: Article,
      children: [
        {
          path: 'create',
          component: Create
        },
        {
          path: 'create',
          component: Create
        }
      ]
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    }
  ]
})
