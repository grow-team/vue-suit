<template>
  <div class="vs-widget-header">
    <template  >
      <div class="vs-widget-caption">
        <span class="vs-widget-caption-subject">
          <slot name="header"></slot>
        </span>
      </div>
    </template>
    <div class="vs-widget-actions" v-if="$slots.actions">
      <slot name="actions"></slot>
    </div>
  </div>
</template>
<script>
export default{
  name: 'vsWidgetHeader',
  components: {
  }
}
</script>
