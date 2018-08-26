<template>
  <el-aside class="sidemenu" :width="sideWidth">
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

const { mapState } = createNamespacedHelpers('app')
export default{
  name: 'sidemenu',
  data () {
    return {
      isCollapse: false,
      sideMenu,
      sideWidth: '200px'
    }
  },
  computed: {
    ...mapState({
      sideMenuCollapse: 'sideMenuCollapse'
    })
  },
  watch: {
    sideMenuCollapse () {
      if (this.sideMenuCollapse) {
        this.sideWidth = '45px'
      } else {
        this.sideWidth = '200px'
      }
    }
  },
  components: {
    logoBar,
    sidemenuItem
  },
  methods: {
    handleOpen () {

    },
    handleClose () {

    }
  }
}
</script>
<style lang="less" scoped>
.sidemenu{
  background-color:#393D49;
  min-height: 100%;
  transition: width 0.2s;
  .el-menu{
    border: none;
  }
}
</style>
