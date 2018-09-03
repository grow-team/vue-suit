import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/base.css'
import ElementUI from 'element-ui'
import App from './app.vue'
import router from './router'
import store from './store'
import Sticky from './directive/sticky'
import './registerServiceWorker'

import '@/style/index.less'

Vue.use(ElementUI)
// 全局添加固定指令
Vue.directive('sticky', Sticky)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
