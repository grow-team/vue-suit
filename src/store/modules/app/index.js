import { APP_SIDEMENU_SWITCH, UPDATE_VISITED_SUBMENU_LIST, DELETE_VISITED_SUBMENU } from '@/store/types.js'

const state = {
  sideMenuCollapse: false,
  visitedSubMenuList: [],
  curMenuRouter: {}
}
const mutations = {
  [APP_SIDEMENU_SWITCH] (state, data) {
    state.sideMenuCollapse = !state.sideMenuCollapse
  },
  [UPDATE_VISITED_SUBMENU_LIST] (state, data) {
    state.curMenuRouter = data
    let hasCache = false
    let j = state.visitedSubMenuList.length
    for (let i = 0; i < j; i += 1) {
      if (state.visitedSubMenuList[i].path === data.path) {
        hasCache = true
        break
      }
    }
    if (!hasCache) {
      if (j >= 5) {
        state.visitedSubMenuList.splice(0, 1)
      }
      state.visitedSubMenuList.push(data)
    }
  },
  [DELETE_VISITED_SUBMENU] (state, data) {
    let j = state.visitedSubMenuList.length
    for (let i = 0; i < j; i += 1) {
      if (state.visitedSubMenuList[i].path === data.path) {
        if (state.curMenuRouter.path === data.path) {
          if (i === 0 && j < 0) {
            state.curMenuRouter = state.visitedSubMenuList[i + 1]
          } else if (i > 0) {
            state.curMenuRouter = state.visitedSubMenuList[i - 1]
          }
        }
        state.visitedSubMenuList.splice(i, 1)
        break
      }
    }
  }
}
const actions = {
  async [APP_SIDEMENU_SWITCH] ({ commit }) {
    commit(APP_SIDEMENU_SWITCH)
  },
  async [UPDATE_VISITED_SUBMENU_LIST] ({ commit }, data) {
    commit(UPDATE_VISITED_SUBMENU_LIST, data)
  },
  async [DELETE_VISITED_SUBMENU] ({ commit }, data) {
    commit(DELETE_VISITED_SUBMENU, data)
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
