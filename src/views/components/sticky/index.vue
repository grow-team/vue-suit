<template>
  <div class="lang-page">
    <div>随着滚动条滚动，固定某个元素</div>
    <div v-sticky="{top:'61',zIndex:'200'}" class="red"></div>
    <div v-sticky="{top:'100',zIndex:'300'}" class="blur"></div>
  </div>
</template>
<script>
export default {
  name: 'component-sticky'
}
</script>
<style lang="less" scoped>
.lang-page{
  height: 1500px;
}
.red{
  width:400px;
  height:20px;
  margin-top: 100px;
  background-color: red;
}
.blur{
  width: 100%;
  height: 20px;
  margin-top: 100px;
  background-color: blue;
}
</style>
