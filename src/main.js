import Vue from 'vue'
// 引入element
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/base.css'
import ElementUI from 'element-ui'
// 引入所有图标
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import VCharts from 'v-charts'

import App from './app.vue'
import router from './router'
import store from './store'
import Sticky from './directive/sticky'
import './registerServiceWorker'
import Widget from './plugins/widget/index.js'

import '@/style/index.scss'

import i18n from './lang'

Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
})
Vue.use(Widget)
Vue.use(VCharts)

// 全局注册图标
Vue.component('v-icon', Icon)
// 全局添加固定指令
Vue.directive('sticky', Sticky)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
