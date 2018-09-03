<template>
  <el-container class="vs-frame">
    <sidemenu></sidemenu>
    <el-container class="is-vertical">
      <headbar></headbar>
      <dynamicSubmenu></dynamicSubmenu>
      <el-main v-sticky="{ scrollEl:true }">
        <transition name="el-fade-in-linear" mode="out-in">
          <router-view/>
        </transition>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import sidemenu from '@/components/frame/sidemenu'
import headbar from '@/components/frame/headbar'
import dynamicSubmenu from '@/components/frame/dynamic-submenu'

export default {
  name: 'frame',
  components: {
    sidemenu,
    headbar,
    dynamicSubmenu
  }
}
</script>

<style lang="less" scoped>
  .vs-frame{
    height: 100%;
  }
</style>
