<template>
  <el-header class="vs-header" height="44px">
    <div class="vs-topleft-box">
      <i v-if="sideMenuCollapse" class="el-icon-arrow-right vs-left-switch" @click="toggleSideBar"></i>
      <i v-else class="el-icon-arrow-left vs-left-switch" @click="toggleSideBar"></i>
    </div>
    <div class="vs-topright-box">
      <span class="vs-top-item">
        <el-dropdown @command="toggleLang">
          <span class="el-dropdown-link">
            {{curLang}}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="zhCN">中文</el-dropdown-item>
            <el-dropdown-item command="en">English</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </span>
      <span class="vs-top-item">
        <i class="el-icon-bell"></i>
      </span>
      <span class="vs-top-item">
        <el-dropdown>
          <span class="el-dropdown-link">
            {{$t('user.name')}}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <a target="_blank" href="https://github.com/grow-team/vue-suit">github</a>
            </el-dropdown-item>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>设置</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </span>
    </div>
  </el-header>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'

const { mapState } = createNamespacedHelpers('app')
export default{
  name: 'headerbar',
  data () {
    return {
      curLang: '中文',
      lang: {
        zhCN: '中文',
        en: 'English'
      }
    }
  },
  computed: {
    ...mapState({
      sideMenuCollapse: 'sideMenuCollapse'
    })
  },
  methods: {
    toggleSideBar () {
      this.$store.dispatch('app/APP_SIDEMENU_SWITCH')
    },
    toggleLang (command) {
      this.curLang = this.lang[command]
      this.$i18n.locale = command
    }
  }
}
</script>
<style lang="scss" scoped>
.vs-header{
  width: 100%;
  border-bottom: 1px solid #f6f6f6;
  .vs-topleft-box{
    line-height: 44px;
    float: left;
  }
  .vs-topright-box{
    line-height: 44px;
    float: right;
  }
  .vs-left-switch{
    cursor: pointer;
  }
  .vs-top-item{
    margin-left: 18px;
  }
}
</style>
