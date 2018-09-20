<template>
  <div>
    <div class="note note-info">
      <h4>图标</h4>
      <a class="vs-related-link" target="_blank" href="https://github.com/Justineo/vue-awesome">api地址</a>
      <a class="vs-related-link" target="_blank" href="https://fontawesome.com/icons?d=gallery&m=free">选择图标</a>
    </div>
    <el-row :gutter="24">
      <vs-widget>
        <div slot="body">
          <el-row class="vs-icon-group">
            <div v-for="item in icons" :key="item" class="item-icon">
              <v-icon class="item-one" scale="3" :name="item" />
              <span class="icon-name">{{item}}</span>
            </div>
          </el-row>
        </div>
      </vs-widget>
    </el-row>
  </div>
</template>
<script>

export default {
  name: 'component-icon',
  data () {
    return {
      icons: [
        'angle-down',
        'angle-left',
        'angle-right',
        'angle-up',
        'arrow-alt-circle-down',
        'arrow-alt-circle-left',
        'arrow-alt-circle-right',
        'arrow-alt-circle-up',
        'arrow-circle-down',
        'arrow-circle-left',
        'arrow-circle-right',
        'arrow-circle-up',
        'arrow-down',
        'arrow-left',
        'arrow-right',
        'arrow-up',
        'align-center',
        'align-justify',
        'align-left',
        'align-right',
        'bell',
        'bell-slash',
        'bold',
        'bullseye',
        'calculator',
        'calendar',
        'calendar-alt',
        'cart-plus',
        'check',
        'check-circle',
        'circle',
        'clock',
        'edit',
        'envelope',
        'envelope-open',
        'file',
        'file-alt'
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../../style/variable.scss';
.vs-icon-group{
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  .item-icon{
    text-align: center;
    width:calc(100%/9);
    min-height: 80px;
    padding: 8px;
    .item-one{
      width: 100%;
    }
  }
}
</style>
