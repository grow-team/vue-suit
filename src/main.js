import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
import App from './app.vue'
import router from './router'
import store from './store/index.js'
import './registerServiceWorker'

import '@/style/index.less'

Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
