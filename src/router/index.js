import Vue from 'vue'
import Router from 'vue-router'

/**
 * 路由配置，根据路由配置自动生成菜单
 */
import Main from './module/main'
import Components from './module/components'
import Pages from './module/pages'

/**
 * 侧边栏路由
 */
let sideMenu = [
  ...Main,
  ...Components,
  ...Pages
]
export { sideMenu }

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/app/',
  routes: [
    ...sideMenu
  ]
})
