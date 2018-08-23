import { APP_SIDEMENU_SWITCH } from '@/store/types.js'

const state = {
  sideMenuCollapse: false
}
const mutations = {
  [APP_SIDEMENU_SWITCH] (state, data) {
    state.sideMenuCollapse = !state.sideMenuCollapse
  }
}
const actions = {
  async [APP_SIDEMENU_SWITCH] ({ commit }) {
    console.log(11111)
    commit(APP_SIDEMENU_SWITCH)
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
