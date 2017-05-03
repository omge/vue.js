import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import bottom from '@/components/bottom'
import search from '@/components/search'
import user from '@/components/user'
import index from '@/components/index/index'
import detail from '@/components/index/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/',
      name: 'bottom',
      component: bottom
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: detail
    }
  ]
})
