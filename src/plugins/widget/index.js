import vsWidget from './index.vue'

export default {
  vsWidget,
  install (Vue) {
    Vue.component('vsWidget', vsWidget)
  }
}
