<template>
  <div class="menu-block">
    <!-- 如果是数组 -->
    <template v-if="Array.isArray(routers)"  v-for="item in routers" >
      <el-submenu v-if="item.children" :index="resolvePath(item.path)||item.name" :title="item.path" :key="item.path">
        <template slot="title">
          <i v-if="item.meta&&item.meta.icon" :class="item.meta.icon"></i>
          <span slot="title">{{item.meta&&item.meta.title}}</span>
        </template>
        <sidemenu-item :routers="item.children" :parentPath="resolvePath(item.path)">
        </sidemenu-item>
      </el-submenu>
      <router-link v-else :to="resolvePath(item.path)" :key="item.path">
        <el-menu-item :index="resolvePath(item.path)" >
          <i v-if="item.meta&&item.meta.icon" :class="item.meta.icon"></i>
          <span slot="title">{{item.meta&&item.meta.title}}</span>
        </el-menu-item>
      </router-link>
    </template>
    <el-submenu v-else-if="routers.children" :index="resolvePath(routers.path)||routers.name" :title="routers.path">
      <template slot="title">
        <i v-if="routers.meta&&routers.meta.icon" :class="routers.meta.icon"></i>
        <span slot="title">{{routers.meta&&routers.meta.title}}</span>
      </template>
      <sidemenu-item :routers="routers.children" :parentPath="resolvePath(routers.path)">
      </sidemenu-item>
    </el-submenu>
    <router-link v-else :to="resolvePath(item.path)">
      <el-menu-item  :index="resolvePath(routers.path)">
        <i v-if="routers.meta&&routers.meta.icon" :class="routers.meta.icon"></i>
        <span slot="title">{{routers.meta&&routers.meta.title}}</span>
      </el-menu-item>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'sidemenu-item',
  props: {
    routers: {
      type: [Array, Object]
    },
    parentPath: {
      type: [String]
    }
  },
  methods: {
    resolvePath (path) {
      return this.parentPath ? this.parentPath + '/' + path : path
    }
  }
}
</script>
<style lang="less" scoped>
  .menu-block .menu-block{
    padding: 2px 0;
    background-color: #000;
  }
</style>
