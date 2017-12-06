import Vue from 'vue'
import Router from 'vue-router'
import Content from '@/components/Content'
import CreateBlog from '@/components/CreateBlog'
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
      component: Content,
      children: [
        {
          path: '',
          name: 'MainContent',
          component: MainContent
        },
        {
          path: '/blog/:id',
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
          name: 'Article',
          component: Article
        },
        {
          path: 'create',
          name: 'CreateBlog',
          component: CreateBlog
        },
        {
          path: 'edit/:id',
          name: 'EditBlog',
          component: Article
        },
        {
          path: 'delete/:id',
          name: 'DeleteAdmin',
          component: Article
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
