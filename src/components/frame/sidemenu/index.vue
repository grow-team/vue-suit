<template>
  <el-aside class="sidemenu" v-bind:style="{ width:sideWidth }">
    <logo-bar></logo-bar>
    <el-menu :default-active="$route.path" class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :collapse="sideMenuCollapse"
    background-color="#393D49"
    text-color="rgba(255,255,255,.7)"
    active-text-color="#fff">
      <sidemenu-item :routers="sideMenu"></sidemenu-item>
    </el-menu>
  </el-aside>
</template>
<script>
import logoBar from '@/components/frame/sidemenu/logo-bar'
import sidemenuItem from '@/components/frame/sidemenu/sidemenu-item'
import { createNamespacedHelpers } from 'vuex'
import { sideMenu } from '@/router'
import { vsSideMenuCollapse, vsVisitedSubmenu, page } from '@/config'
import { INIT_APP_SIDEMENU_SWITCH, INIT_VISITED_SUBMENU_LIST } from '@/store/types'
import { getBodySize } from '@/utils'

const { mapState, mapActions } = createNamespacedHelpers('app')
export default{
  name: 'sidemenu',
  data () {
    let sideWidth = '0'
    if (getBodySize().width > page.maxScreenWidth) {
      sideWidth = '200px'
    }
    return {
      sideMenu,
      sideWidth,
      strogeSubRouter: []
    }
  },
  computed: {
    ...mapState({
      sideMenuCollapse: 'sideMenuCollapse'
    })
  },
  watch: {
    sideMenuCollapse () {
      if (getBodySize().width <= page.maxScreenWidth) {
        this.sideMenuCollapse = !this.sideMenuCollapse
        if (this.sideMenuCollapse) {
          this.sideWidth = '0'
        } else {
          this.sideWidth = '200px'
        }
      } else {
        if (this.sideMenuCollapse) {
          this.sideWidth = '45px'
        } else {
          this.sideWidth = '200px'
        }
      }
    }
  },
  async beforeMount () {
    // 初始化左侧菜单展开收起的状态
    let sessionDataCollapse = sessionStorage.getItem(vsSideMenuCollapse)
    if (sessionDataCollapse) {
      this.sidmenuCollapse(sessionDataCollapse !== 'false')
    }
    // 初始化浏览过的头部菜单
    let sessionDataSubmenu = sessionStorage.getItem(vsVisitedSubmenu)
    if (sessionDataSubmenu) {
      let strogeSubMenu = JSON.parse(sessionDataSubmenu)
      this.findVisitedSubmenu('', sideMenu, strogeSubMenu)
      await this.initVisitedSubmenu({
        visitedRoute: this.strogeSubRouter,
        curRoute: this.$route
      })
    }
  },
  components: {
    logoBar,
    sidemenuItem
  },
  methods: {
    ...mapActions({
      sidmenuCollapse: INIT_APP_SIDEMENU_SWITCH,
      initVisitedSubmenu: INIT_VISITED_SUBMENU_LIST
    }),
    findVisitedSubmenu (basePath, routers, strogeSubMenu) {
      for (let i = 0, j = routers.length; i < j; i += 1) {
        let path = basePath ? basePath + '/' + routers[i].path : routers[i].path
        if (strogeSubMenu.indexOf(path) > -1) {
          routers[i].path = path
          this.strogeSubRouter.push(routers[i])
        }
        if (routers[i].children) {
          this.findVisitedSubmenu(path, routers[i].children, strogeSubMenu)
        }
      }
    },
    handleOpen () {

    },
    handleClose () {

    }
  }
}
</script>
<style lang="scss" scoped>
.sidemenu{
  background-color:#393D49;
  min-height: 100%;
  transition: width 0.2s;
  .el-menu{
    border: none;
  }
}

@media screen and (max-width: 992px){
  .sidemenu {
    width: 0px;
  }
}
</style>
