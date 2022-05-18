<template>
  <div>
    <h2>销售总量</h2>
    <div class="chart" id="itemOne"></div>
  </div>
</template>

<script>
import { inject, onMounted, reactive } from "vue";
import dataJson from "@/api/one.json";
export default {
  setup() {
    let $echarts = inject("echarts");

    // ? 返回对象的响应式副本
    let data = reactive({}); // 后端返回的数据对象
    let xData = reactive([]); // 类目轴数据
    let yData = reactive([]); // 数值数据

    function setData() {
      xData = data.chartData.map((item) => item.title);
      yData = data.chartData.map((item) => item.num);
    }

    async function getState() {
      // ? 从自定义的 server 那里获取需要的数据
      data = await dataJson;
    }

    // ? 在 `setup` 内注册生命周期钩子
    onMounted(() => {
      // ? 初始化 echarts 对象
      let myChart = $echarts.init(document.querySelector("#itemOne"));
      let myColor = [
        "#1089E7",
        "#F57474",
        "#56D0E3",
        "#F8B448",
        "#8B78F6",
        "#00f2f1",
        "#ed3f35",
      ];

      // ? 从后端获取数据以后设置数据
      getState().then(() => {
        setData();
        // ? 应用选项
        myChart.setOption({
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow",
            },
          },
          grid: {
            top: "10%",
            left: "5%",
            right: "8%",
            bottom: "5%",
            // ? 将坐标轴的标签考虑在内
            containLabel: true,
          },
          // ? x轴显示数值
          xAxis: {
            type: "value",
            axisLine: {
              lineStyle: {
                color: "#fff",
              },
            },
            splitLine: {
              lineStyle: {
                color: "rgba(255,255,255,.3)",
              },
            },
          },
          yAxis: {
            type: "category",
            data: xData,
            axisLine: {
              lineStyle: {
                color: "#fff",
              },
            },
            axisTick: {
              show: false,
            },
          },
          series: {
            type: "bar",
            data: yData,
            barWidth: "45%",
            itemStyle: {
              color: function (params) {
                return myColor[params.dataIndex];
              },
              shadowBlur: 4,
              shadowColor: "rgba(255,255,255, 0.5)",
              // 数组顺序为左上->右上->右下->左下
              borderRadius: 5,
            },
          },
        });
      });

      // ? 自适应大小
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    });

    // ! 返回的内容可用于组件的其余部分(组件内全局使用)
    return {
      setData,
      getState,
      data,
      xData,
      yData,
    };
  },
};
</script>

<style scoped>
.chart {
  height: 4.5rem;
}
h2 {
  height: 0.6rem;
  color: #fff;
  line-height: 0.6rem;
  text-align: center;
}
</style>
