<template>
  <div>
    <h2>库存统计</h2>
    <div class="chart" id="itemFour">

    </div>
  </div>
</template>

<script>
import { inject, onMounted, reactive } from 'vue'
import dataJson from '@/api/four.json'
export default {
  setup() {
    let $echarts = inject('echarts')
    let $http = inject('axios')
    let data = reactive({})

    async function getState() {
      data = await dataJson
    }

    onMounted(() => {
      getState().then(() => {
        let chartData = data.chartData
        let myChart = $echarts.init(document.querySelector('#itemFour'))

        myChart.setOption({
          grid: {
            top: '20%',
            left: '5%',
            right: '8%',
            bottom: '5%',
            // ? 将坐标轴的标签考虑在内
            containLabel: true
          },
          legend: {
            textStyle: {
              color: 'rgba(255,255,255,0.6)'
            },
            itemWidth: 14,
            itemHeight: 14
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow',
            },
          },
          xAxis: {
            type: 'category',
            data: chartData.day,
            axisLabel: {
              color: '#fff',
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              lineStyle: {
                color: '#fff'
              }
            }
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              color: '#fff',
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              lineStyle: {
                color: '#fff'
              }
            },
            splitLine: {
              lineStyle: {
                color: 'rgba(255,255,255,.3)'
              }
            }
          },
          series: [
            {
              type: 'bar',
              name: '服饰',
              stack: 'total',
              label: {
                show: true,
                color: '#fff',
              },
              emphasis: {
                focus: 'series'
              },
              data: chartData.num.Clothes
            },
            {
              type: 'bar',
              name: '数码',
              stack: 'total',
              label: {
                show: true,
                color: '#fff',
              },
              emphasis: {
                focus: 'series'
              },
              data: chartData.num.digit
            },
            {
              type: 'bar',
              name: '家电',
              stack: 'total',
              label: {
                show: true,
                color: '#fff',
              },
              emphasis: {
                focus: 'series'
              },
              data: chartData.num.Electrical
            },
            {
              type: 'bar',
              name: '家居',
              stack: 'total',
              label: {
                show: true,
                color: '#fff',
              },
              emphasis: {
                focus: 'series'
              },
              data: chartData.num.gear
            },
            {
              type: 'bar',
              name: '日化',
              stack: 'total',
              label: {
                show: true,
                color: '#fff',
              },
              emphasis: {
                focus: 'series'
              },
              data: chartData.num.Chemicals
            },
            
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
  height: .6rem;
  color: #fff;
  line-height: .6rem;
  text-align: center;
}
</style>