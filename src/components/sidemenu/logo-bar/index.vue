<template>
  <div class="vs-logo">
    logo
  </div>
</template>
<script>
export default{
  name: 'logoBar',
  methods: {

  }
}
</script>
<style lang="less" scoped>
  @import '../../../style/variable.less';
  .vs-logo{
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background-color: @logo-bg;
    color: @logo-color;
  }
</style>
