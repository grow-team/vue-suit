<template>
  <div>
    <el-row :gutter="24">
      <el-col :span="6">
        <widget>
          <div slot="body">
            <h4 class="widget-thumb-heading">
              本月支出
            </h4>
            <div class="widget-thumb-wrap">
              <i class="widget-thumb-icon bg-green"></i>
              <div class="widget-thumb-body">
                <span class="widget-thumb-subtitle">总计</span>
                <span class="widget-thumb-body-stat">
                  38382
                </span>
              </div>
            </div>
          </div>
        </widget>
      </el-col>
      <el-col :span="6">
        <widget>
          <div slot="body">
            <h4 class="widget-thumb-heading">
              单次最大
            </h4>
            <div class="widget-thumb-wrap">
              <i class="widget-thumb-icon bg-purple"></i>
              <div class="widget-thumb-body">
                <span class="widget-thumb-subtitle">总计</span>
                <span class="widget-thumb-body-stat">
                  9867
                </span>
              </div>
            </div>
          </div>
        </widget>
      </el-col>
      <el-col :span="6">
        <widget>
          <div slot="body">
            <h4 class="widget-thumb-heading">
              单次最少
            </h4>
            <div class="widget-thumb-wrap">
              <i class="widget-thumb-icon bg-orange"></i>
              <div class="widget-thumb-body">
                <span class="widget-thumb-subtitle">总计</span>
                <span class="widget-thumb-body-stat">
                  1765
                </span>
              </div>
            </div>
          </div>
        </widget>
      </el-col>
      <el-col :span="6">
        <widget>
          <div slot="body">
            <h4 class="widget-thumb-heading">
              次数
            </h4>
            <div class="widget-thumb-wrap">
              <i class="widget-thumb-icon bg-blue"></i>
              <div class="widget-thumb-body">
                <span class="widget-thumb-subtitle">总计</span>
                <span class="widget-thumb-body-stat">
                  156
                </span>
              </div>
            </div>
          </div>
        </widget>
      </el-col>
    </el-row>
    <el-row :gutter="24">
      <el-col :span="12">
        <vs-widget>
          <div slot="header">
            用户访问情况
          </div>
          <div slot="body">
            <ve-histogram :data="chartData" :settings="chartSettings"></ve-histogram>
          </div>
        </vs-widget>
      </el-col>
      <el-col :span="12">
        <vs-widget>
          <div slot="header">
            用户访问情况
          </div>
          <div slot="body">
            <ve-radar :data="radarData"></ve-radar>
          </div>
        </vs-widget>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import wd from '@/plugins/widget/index.js'

export default{
  name: 'vs-main',
  components: {
    widget: wd.vsWidget
  },
  data () {
    this.chartSettings = {
      showLine: ['下单用户']
    }
    return {
      chartData: {
        columns: ['日期', '访问用户', '下单用户', '下单率'],
        rows: [
          { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
          { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
          { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
          { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
          { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
          { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
        ]
      },
      radarData: {
        columns: ['日期', '访问用户', '下单用户', '下单率'],
        rows: [
          { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
          { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
          { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
          { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
          { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
          { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
        ]
      }
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../style/variable.less';

@color-soft-purple:#8E44AD;
@color-soft-orange:#F78400;
@color-soft-blue:#1E9FFF;

.widget-thumb-heading{
  font-size: 14px;
  font-weight: 700;
  color: @vs-font-color-light;
  margin: 0 0 20px;
}
.widget-thumb-icon{
  float: left;
  width: 60px;
  height: 60px;
  font-size: 20px;
  line-height: 41px;
  text-align: center;
  margin-right: 15px;
}
.widget-thumb-body{
  display: inline-block;
}
.widget-thumb-subtitle{
  padding-top: 2px;
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: @vs-font-color-light;
}
.widget-thumb-body-stat{
  display: block;
  font-size: 30px;
  font-weight: 600;
  color: #3e4f5e;
}
.bg-green{
  background-color: @vs-color-primary-light-3;
}
.bg-purple{
  background-color: @color-soft-purple;
}
.bg-orange{
  background-color: @color-soft-orange;
}
.bg-blue{
  background-color: @color-soft-blue;
}
</style>
