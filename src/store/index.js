import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
// load global actions、...

// load all modules
import app from './modules/app/index'
// use Vuex
Vue.use(Vuex)

// export
const isInDev = process.env.NODE_ENV !== 'production'
const plugins = isInDev ? [createLogger()] : []
export default new Vuex.Store({
  modules: {
    app
  },
  strict: isInDev,
  plugins
})
