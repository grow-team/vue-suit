<template>
  <div>
    <el-row :gutter="24">
      <el-col :span="6">
        <widget>
          <div slot="body">
            卡片1
          </div>
        </widget>
      </el-col>
      <el-col :span="6">
        <widget>
          <div slot="body">
            卡片2
          </div>
        </widget>
      </el-col>
      <el-col :span="6">
        <widget>
          <div slot="body">
            卡片3
          </div>
        </widget>
      </el-col>
      <el-col :span="6">
        <widget>
          <div slot="body">
            卡片4
          </div>
        </widget>
      </el-col>
    </el-row>
    <el-row :gutter="24">
      <el-col :span="12">
        <widget>
          <div slot="header">
            代办任务
          </div>
          <div slot="body">
          </div>
        </widget>
      </el-col>
      <el-col :span="12">
        <widget>
          <span slot="header">
            将进酒
          </span>
          <div slot="actions">
            <el-button icon="el-icon-search" circle></el-button>
            <el-button type="primary" icon="el-icon-edit" circle></el-button>
            <el-button type="success" icon="el-icon-check" circle></el-button>
          </div>
          <div slot="body">
            君不见，黄河之水天上来⑵，奔流到海不复回。<br/>
            君不见，高堂明镜悲白发，朝如青丝暮成雪⑶。<br/>
            人生得意须尽欢⑷，莫使金樽空对月。<br/>
            天生我材必有用，千金散尽还复来。<br/>
            ...
          </div>
        </widget>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
    </el-row>
  </div>
</template>
<script>
import wd from '@/plugins/widget/index.js'
export default{
  name: 'com-widget',
  components: {
    widget: wd.vsWidget
  }
}
</script>
