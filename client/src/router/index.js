import Vue from 'vue'
import Router from 'vue-router'
import Content from '@/components/Content'
import Intro from '@/components/Intro'
import Create from '@/components/Create'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Article from '@/components/Article'
import Admin from '@/components/Admin'

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
      component: Admin,
      children: [
        {
          path: '',
          component: Article
        },
        {
          path: 'create',
          component: Create
        },
        {
          path: 'edit/:id',
          component: Create
        },
        {
          path: 'delete/:id',
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
