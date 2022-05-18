<template>
  <div>
    <h2>库存统计</h2>
    <div class="chart" id="itemThree">

    </div>
  </div>
</template>

<script>
import { inject, onMounted, reactive } from 'vue'
import dataJson from '@/api/three.json'
export default {
  setup() {
    let $echarts = inject('echarts')
    let data = reactive({})
    
    async function getState() {
      data = await dataJson
    }
    onMounted(() => {
      getState().then(() => {
        // ? 创建 echarts 实例
        let myChart = $echarts.init(document.querySelector('#itemThree'))

        myChart.setOption({
          color: ["#1089E7", "#F57474", "#56D0E3", "#F8B448", '#00f2f1', '#ed3f35'],
          grid: {
            left: '5%',
            right: '8%',
            bottom: '20%',
            // ? 将坐标轴的标签考虑在内
            containLabel: true
          },
          legend: {
            left: '3%',
            bottom: '5%',
            orient: 'vertical',
            itemWidth: 12,
            itemHeight: 12,
            textStyle: {
              fontSize: 12,
              color: 'rgba(255,255,255,0.6)'
            }
          },
          tooltip: {
            show: true,
          },
          series: [
            {
              type: 'pie',
              // ? 使用玫瑰图
              roseType: 'radius',  // 同时使用半径和面积来表示大小
              // ? 设置内外半径创建镂空环图
              radius: ['10%', '70%'],
              center: ['50%', '45%'],
              itemStyle: {
                borderRadius: 8,
                shadowBlur: 4,
                shadowColor: 'rgba(255, 255, 255, 0.5)'
              },
              data: data.chartData
            }
          ]
        })

        // ! 自适应大小
        window.addEventListener('resize', () => {
          myChart.resize()
        })
      })
    })
    return {
      data,
      getState
    }
  }
}
</script>

<style>
.chart {
  height: 4.5rem;
}

h2 {
  /* 48像素 */
  height: 0.6rem;
  color: #fff;
  line-height: 0.6rem;
  text-align: center;
  font-size: 0.25rem;
}
</style>