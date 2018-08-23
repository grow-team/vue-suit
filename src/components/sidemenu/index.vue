<template>
  <el-aside class="sidemenu" width="200px">
    <logo-bar></logo-bar>
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :collapse="sideMenuCollapse"
    background-color="#393D49"
    text-color="#fff"
    active-text-color="rgba(0,0,0,.3)">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>
<script>
import logoBar from '@/components/sidemenu/logo-bar'
import { createNamespacedHelpers } from 'vuex'

const { mapState } = createNamespacedHelpers('app')
export default{
  name: 'sidemenu',
  data () {
    return {
      isCollapse: false
    }
  },
  computed: {
    ...mapState({
      sideMenuCollapse: 'sideMenuCollapse'
    })
  },
  components: {
    logoBar
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
  width: 200px;
  background-color:#393D49;
  min-height: 100%;
  .el-menu{
    border: none;
  }
}
</style>
