<template>
  <div class="dynamic-submenu">
    <ul class="vs-submenu-bar">
      <li @click="goRoute(item)" v-for="item in visitedSubMenuList" :key="item.path||item.name" class="vs-submenu-item" v-bind:class="{'active': item.path === curMenuRouter.path }" >
        {{routeI18n(item.meta.title)}}
        <i @click="close(item,$event)" class="el-icon-circle-close-outline vs-submenu-switch"></i>
      </li>
    </ul>
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
import { UPDATE_VISITED_SUBMENU_LIST, DELETE_VISITED_SUBMENU } from '@/store/types'
import { vsVisitedSubmenu } from '@/config'
import { routeI18n } from '@/utils/index'

const { mapState, mapActions } = createNamespacedHelpers('app')
export default{
  name: 'dynamic-submenu',
  computed: {
    ...mapState({
      visitedSubMenuList: 'visitedSubMenuList',
      curMenuRouter: 'curMenuRouter'
    })
  },
  watch: {
    $route () {
      this.updateSMList()
    },
    curMenuRouter () {
      this.$router.push(this.curMenuRouter)
    }
  },
  beforeMount () {
    // 没有缓存 打开菜单时，初始化菜单
    let sessionDataSubmenu = sessionStorage.getItem(vsVisitedSubmenu)
    if (!sessionDataSubmenu) {
      this.updateSMList()
    }
  },
  methods: {
    ...mapActions({
      updateVisitedSubmenuList: UPDATE_VISITED_SUBMENU_LIST,
      deleteVisitedSubmenu: DELETE_VISITED_SUBMENU
    }),
    toggleSideBar () {
      this.$store.dispatch('app/APP_SIDEMENU_SWITCH')
    },
    updateSMList () {
      this.updateVisitedSubmenuList(this.$route)
    },
    close (route, e) {
      e.stopPropagation()
      this.deleteVisitedSubmenu(route)
    },
    goRoute (route) {
      this.$router.push(route)
    },
    routeI18n
  }
}
</script>
<style lang="scss" scoped>
@import '../../../style/variable.scss';

$activeBgColor: #f6f6f6;
$thickBorderColor: #292B34;
.dynamic-submenu{
  width: 100%;
  height: 45px;
  line-height: 45px;
  border-bottom: 1px solid $vs-border-color-linght;
  box-shadow: 0 2px 2px 0 $vs-border-color-linght;
  .vs-submenu-item{
    cursor: pointer;
    position: relative;
    font-size: 14px;
    float: left;
    padding: 0 35px 0 15px;
    border-right: 1px solid $vs-border-color-linght;
    &::after{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 2px;
      border-radius: 0;
      background-color: $thickBorderColor;
      transition: all .3s;
      -webkit-transition: all .3s;
    }
    &.active{
      background-color:$activeBgColor;
      &::after{
        width: 100%;
      }
    }
    &:hover{
      background-color:$activeBgColor;
      &::after{
        width: 100%;
      }
    }
    .vs-submenu-switch{
      position: absolute;
      right: 8px;
      top: 50%;
      margin: -7px 0 0;
      border-radius: 50%;
      font-size: 14px;
      &:hover{
        color:#AA3130;
      }
    }
  }
}
</style>
