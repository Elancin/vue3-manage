<template>
  <v-chart class="chart" :option="option" />
  <v-chart class="chart" :option="option1" />

</template>

<script setup>
import VChart from "vue-echarts";
import { use } from "echarts/core";
import { ref } from "vue";
import { GridComponent } from 'echarts/components';
import { LineChart ,BarChart} from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

use([GridComponent, LineChart, CanvasRenderer, UniversalTransition,BarChart]);

const option = ref({ //折线图
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    }
  ]
});
const option1=ref({ //柱状图
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar'
    }
  ]
})
</script>

<style scoped>
.chart {
  height: 400px;
  width: 600px;
}
</style>