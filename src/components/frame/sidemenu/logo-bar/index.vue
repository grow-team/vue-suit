<template>
  <div class="vs-logo">
    vue suit
  </div>
</template>
<script>
export default{
  name: 'logoBar',
  methods: {
    data () {

    }
  }
}
</script>
<style lang="scss" scoped>
  @import '../../../../style/variable.scss';
  .vs-logo{
    width: 100%;
    height: 45px;
    line-height: 45px;
    text-align: center;
    background-color: $logo-bg;
    color: $logo-color;
  }
</style>
