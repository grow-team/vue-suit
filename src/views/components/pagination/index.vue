<template>
<div>
  <el-row :gutter="20">
    <el-col :span="24">
      <widget>
        <div slot="body">
          <el-pagination
            layout="prev, pager, next"
            small
            :total="1000">
          </el-pagination>
        </div>
      </widget>
    </el-col>
  </el-row>

  <el-row :gutter="20">
    <el-col :span="24">
      <widget>
        <div slot="body">
          <el-pagination
            layout="prev, pager, next"
            :total="1000">
          </el-pagination>
        </div>
      </widget>
    </el-col>
  </el-row>

  <el-row :gutter="20">
    <el-col :span="24">
      <widget>
        <div slot="body">
          <el-pagination
            background
            layout="prev, pager, next"
            small
            :total="1000">
          </el-pagination>
        </div>
      </widget>
    </el-col>
  </el-row>

  <el-row :gutter="20">
    <el-col :span="24">
      <widget>
        <div slot="body">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="1000">
          </el-pagination>
        </div>
      </widget>
    </el-col>
  </el-row>
</div>
</template>

<script>
import wd from '@/plugins/widget/index.js'

export default {
  name: 'com-pagination',
  data: function(){
    return {}
  },
  components: {
    widget: wd.vsWidget
  }
}
</script>

<style>

</style>
