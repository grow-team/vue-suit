<template>
  <div class="vs-widget">
    <widget-header v-if="this.$slots.header" >
      <div slot="header">
        <slot name="header"></slot>
      </div>
      <div slot="actions" >
        <slot name="actions"></slot>
      </div>
    </widget-header>
    <widget-body slot="body">
      <slot name="body"></slot>
    </widget-body>
  </div>
</template>
<script>
import widgetBody from './widget-body'
import widgetHeader from './widget-header'
export default{
  name: 'vsWidget',
  components: {
    widgetBody,
    widgetHeader
  }
}

</script>
