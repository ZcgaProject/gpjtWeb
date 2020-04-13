import Vue from 'vue'
import Router from 'vue-router'
import GuopuPage from '@/pages/guoPuHome/guopuPage'
import GuopuYidong from '@/pages/guoPuHome/guopuYidong'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'guopuPage'
    },
    {
      path: '/guopuPage',
      name: 'GuopuPage',
      component: GuopuPage
    },
    {
      path: '/guopuYidong',
      name: 'GuopuYidong',
      component: GuopuYidong
    }
  ]
})
