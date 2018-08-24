<template>
  <el-container class="frame">
    <sidemenu></sidemenu>
    <el-container class="is-vertical">
      <headbar></headbar>
      <el-main>
        <transition>
          <router-view/>
        </transition>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import sidemenu from '@/components/sidemenu'
import headbar from '@/components/headbar'
export default {
  name: 'frame',
  components: {
    sidemenu,
    headbar
  }
}
</script>

<style lang="less" scoped>
  @import '../../style/common.less';
  .frame{
    height: 100%;
  }
</style>
