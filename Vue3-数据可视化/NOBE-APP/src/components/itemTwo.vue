<template>
  <div>
    <h2>每周销量</h2>
    <div class="chart" id="itemTwo">

    </div>
  </div>
</template>

<script>
import { inject, onMounted, reactive } from 'vue'
import dataJson from '@/api/two.json'
export default {
  setup() {
    let $echarts = inject('echarts')
    let data = reactive({})

    // ? 获取后端数据
    async function getState() {
      data = await dataJson
    }

    onMounted(() => {
      getState().then(() => {
        let chartData = data.chartData
        let myChart = $echarts.init(document.querySelector('#itemTwo'))

        myChart.setOption({
          grid: {
            top: '10%',
            left: '5%',
            right: '8%',
            bottom: '5%',
            // ? 将坐标轴的标签考虑在内
            containLabel: true
          },
          // ? 显示图例组件
          legend: {
            textStyle: {
              color: 'rgba(255,255,255,0.6)'
            }
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',  // 设置指示器类型为十字星
              label: {
                backgroundColor: '#e6b600',
              }
            }
          },
          xAxis: {
            type: 'category',
            data: chartData.day,
            boundaryGap: false,  // 取消 x轴两侧的留白
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
              name: '服装',
              type: 'line',
              stack: 'total',
              // ? 设置拐点只有在触发提示框的时候才出现
              showSymbol: false,
              itemStyle: {
                show: false
              },
              smooth: true,
              areaStyle: {
                opacity: 0.8, 
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                        offset: 0,
                        color: "rgb(128, 255, 165)",
                    },
                    {
                        offset: 1,
                        color: "rgb(1, 191, 236)",
                    },
                  ]
                },
              },
              lineStyle: {
                width: 0,
              },
              emphasis: {  //设置高亮的图形样式和标签样式 
                focus: "series",  //只显示选中的内容高亮
              },
              data: chartData.num.Clothes
            },
            {
              name: '数码',
              type: 'line',
              stack: 'total',
              // ? 设置拐点只有在触发提示框的时候才出现
              showSymbol: false,
              itemStyle: {
                show: false
              },
              smooth: true,
              areaStyle: {
                opacity: 0.8, 
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                    offset: 0,
                    color: "rgb(0, 221, 255)",
                    },
                    {
                    offset: 1,
                    color: "rgb(77, 119, 255)",
                    },
                  ]
                },
              },
              lineStyle: {
                width: 0,
              },
              emphasis: {  //设置高亮的图形样式和标签样式 
                focus: "series",  //只显示选中的内容高亮
              },
              data: chartData.num.digit
            },
            {
              name: '家电',
              type: 'line',
              stack: 'total',
              // ? 设置拐点只有在触发提示框的时候才出现
              showSymbol: false,
              itemStyle: {
                show: false
              },
              smooth: true,
              areaStyle: {
                opacity: 0.8, 
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                    offset: 0,
                    color: "rgb(55, 162, 255)",
                    },
                    {
                    offset: 1,
                    color: "rgb(116, 21, 219)",
                    },
                  ]
                },
              },
              lineStyle: {
                width: 0,
              },
              emphasis: {  //设置高亮的图形样式和标签样式 
                focus: "series",  //只显示选中的内容高亮
              },
              data: chartData.num.Electrical
            },
            {
              name: '家居',
              type: 'line',
              stack: 'total',
              // ? 设置拐点只有在触发提示框的时候才出现
              showSymbol: false,
              itemStyle: {
                show: false
              },
              smooth: true,
              areaStyle: {
                opacity: 0.8, 
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                    offset: 0,
                    color: "rgb(255, 191, 0)",
                    },
                    {
                    offset: 1,
                    color: "rgb(224, 62, 76)",
                    },
                  ]
                },
              },
              lineStyle: {
                width: 0,
              },
              emphasis: {  //设置高亮的图形样式和标签样式 
                focus: "series",  //只显示选中的内容高亮
              },
              data: chartData.num.gear
            },
            {
              name: '日化',
              type: 'line',
              stack: 'total',
              // ? 设置拐点只有在触发提示框的时候才出现
              showSymbol: false,
              itemStyle: {
                show: false
              },
              smooth: true,
              areaStyle: {
                opacity: 0.8, 
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                    offset: 0,
                    color: "rgb(255, 0, 135)",
                    },
                    {
                    offset: 1,
                    color: "rgb(135, 0, 157)",
                    },
                  ]
                },
              },
              lineStyle: {
                width: 0,
              },
              emphasis: {  //设置高亮的图形样式和标签样式 
                focus: "series",  //只显示选中的内容高亮
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