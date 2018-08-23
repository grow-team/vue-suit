<template>
  <el-header class="header" height="39px">
    <i class="switch" @click="toggleSideBar">
      开关
    </i>
  </el-header>
</template>
<script>
export default{
  name: 'headerbar',
  methods: {
    toggleSideBar () {
      this.$store.dispatch('app/APP_SIDEMENU_SWITCH')
    }
  }
}
</script>
<style lang="less" scoped>
.header{
  height: 39px;
  width: 100%;
  border-bottom: 1px solid #f6f6f6;
}
</style>
