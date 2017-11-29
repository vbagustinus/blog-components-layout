import Vue from 'vue'
import Router from 'vue-router'
import Content from '@/components/Content'
import Intro from '@/components/Intro'
import Create from '@/components/Create'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Article from '@/components/Article'
import Admin from '@/components/Admin'
import DetailArticle from '@/components/DetailArticle'
import MainContent from '@/components/MainContent'

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
      component: Content,
      children: [
        {
          path: '',
          name: 'MainContent',
          component: MainContent
        },
        {
          path: ':id',
          name: 'DetailArticle',
          component: DetailArticle,
          props: true
        }
      ]
    },
    {
      path: '/admin',
      component: Admin,
      children: [
        {
          path: '',
          name: 'Admin',
          component: Article
        },
        {
          path: 'create',
          name: 'CreateAdmin',
          component: Create
        },
        {
          path: 'edit/:id',
          name: 'EditAdmin',
          component: Create
        },
        {
          path: 'delete/:id',
          name: 'DeleteAdmin',
          component: Create
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
