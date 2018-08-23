import Vue from 'vue'
import Router from 'vue-router'

import Frame from '@/components/frame'
import Main from '@/views/main'

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
        }
      ]
    }
  ]
})
