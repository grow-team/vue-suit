import { APP_SIDEMENU_SWITCH, INIT_APP_SIDEMENU_SWITCH, INIT_VISITED_SUBMENU_LIST, UPDATE_VISITED_SUBMENU_LIST, DELETE_VISITED_SUBMENU } from '@/store/types.js'
import { vsSideMenuCollapse, vsVisitedSubmenu } from '@/config'
/**
 * 在sessionStorage中记录打开tab页
 * @param {Object} data
 */
function setVsVisitedSubmenu (data) {
  if (!data) {
    return
  }
  // todo 在存储router对象结构的时候
  let subMenuStr = '['
  for (let i = 0, j = data.length; i < j; i += 1) {
    subMenuStr += `"${data[i].path}",`
  }
  subMenuStr = subMenuStr.substring(0, subMenuStr.length - 1)
  subMenuStr += ']'
  sessionStorage.setItem(vsVisitedSubmenu, subMenuStr)
}
const state = {
  sideMenuCollapse: false,
  visitedSubMenuList: [],
  curMenuRouter: {}
}
const mutations = {
  [INIT_APP_SIDEMENU_SWITCH] (state, data) {
    state.sideMenuCollapse = data
  },
  [APP_SIDEMENU_SWITCH] (state, data) {
    state.sideMenuCollapse = !state.sideMenuCollapse
    sessionStorage.setItem(vsSideMenuCollapse, state.sideMenuCollapse)
  },
  [INIT_VISITED_SUBMENU_LIST] (state, data) {
    state.visitedSubMenuList = data.visitedRoute
    state.curMenuRouter = data.curRoute
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
    setVsVisitedSubmenu(state.visitedSubMenuList)
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
    setVsVisitedSubmenu(state.visitedSubMenuList)
  }
}
const actions = {
  async [INIT_APP_SIDEMENU_SWITCH] ({ commit }, data) {
    commit(INIT_APP_SIDEMENU_SWITCH, data)
  },
  async [APP_SIDEMENU_SWITCH] ({ commit }) {
    commit(APP_SIDEMENU_SWITCH)
  },
  async [UPDATE_VISITED_SUBMENU_LIST] ({ commit }, data) {
    commit(UPDATE_VISITED_SUBMENU_LIST, data)
  },
  async [DELETE_VISITED_SUBMENU] ({ commit }, data) {
    commit(DELETE_VISITED_SUBMENU, data)
  },
  async [INIT_VISITED_SUBMENU_LIST] ({ commit }, data) {
    commit(INIT_VISITED_SUBMENU_LIST, data)
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
