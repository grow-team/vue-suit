import Vue from 'vue'
import Router from 'vue-router'

import Frame from '@/components/frame'
import Main from '@/views/main'
import Components from './module/components'
import Pages from './module/pages'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Frame,
      children: [
        {
          path: 'main',
          component: Main
        },
        ...Components,
        ...Pages
      ]
    }
  ]
})
