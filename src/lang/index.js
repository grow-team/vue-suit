import Vue from 'vue'
import VueI18n from 'vue-i18n'
/**
 * elementEn elementZh
 * element 组件内的国际化配置
 * 结构
 * el:{
 *  lodding:{...}
 *  ...
 * }
 */
import elementEn from 'element-ui/lib/locale/lang/en'
import elementZh from 'element-ui/lib/locale/lang/zh-CN.js'

import en from './en'
import zhCN from './zh-CN'

Vue.use(VueI18n)

const messages = {
  en: {
    ...en,
    ...elementEn
  },
  zhCN: {
    ...zhCN,
    ...elementZh
  }
}
export default new VueI18n({
  locale: 'zhCN', // set locale
  messages // set locale messages
})
