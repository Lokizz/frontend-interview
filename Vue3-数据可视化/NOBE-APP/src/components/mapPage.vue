<template>
  <div class="map"></div>
</template>

<script>
// ? 单独引入是因为 map 数据文件与其他 item 组件的数据路径不一样
import { onMounted, reactive, inject } from "vue";
import mapJson from '@/api/china.json'
export default {
  setup() {
    let $echarts = inject("echarts");
    let mapData = reactive({});
    async function getState() {
      mapData = await mapJson
    }

    onMounted(() => {
      getState().then(() => {
        // ? 用于获取散点图中的所有数据
        let values = {
          valList: [],
          maxVal: 0,
        };
        // ? 初始化图表实例
        let myChart = $echarts.init(document.querySelector(".map"));

        // ? 注册地图
        $echarts.registerMap("china", mapData); // 获取返回响应的具体数据部分
        myChart.setOption({
          // ? 地图图表必要选项
          geo: {
            type: "map",
            // ? 使用注册了的地图名称
            map: "china",
            // ? 开启缩放移动功能
            // roam: true,
            itemStyle: {
              areaColor: "#0099FF",
              borderColor: "rgba(255, 255, 204, .8)",
              shadowColor: "#666699",
              shadowOffsetX: 1,
              shadowOffsetY: 2,
              shadowBlur: 4,
            },
            // ? 设置高亮状态淡出其他部分
            emphasis: {
              focus: "self",
              // ? 设置高亮下的文字标签样式
              label: {
                show: false,
              },
            },
          },
          title: {
            text: "全国销量",
            left: "center",
            textStyle: {
              color: "#fff",
              fontSize: 24,
              textShadowBlur: 6,
              textShadowOffsetX: 1,
              textShadowOffsetY: 2,
              textShadowColor: "rgba(255, 255, 255, 0.4)",
            },
          },
          // ? 提示框组件
          tooltip: {
            trigger: "item",
            formatter: (params) => {
              let value = Math.round(params.data.value[2]);
              return `${params.data.name}销售额：<br>${value}万`;
            },
          },
          // ? 视觉映射组件
          visualMap: {
            type: "continuous",
            min: 500,
            max: 3000,
            // 是否启用滑动空间
            calculable: true,
            // ! 不让视觉编码控制散点图中的颜色
            seriesIndex: [0],
            inRange: {
              color: ["#D4FCC3", "#F4E925", "#EDFF86"], // 指定数值从低到高时的颜色变化
            },
            textStyle: {
              color: "#24CFF4",
            },
          },
          // ? 在地图上显示数据
          series: [
            {
              name: "城市销售额",
              type: "effectScatter",
              // ! 指定使用的坐标系为所用地图
              coordinateSystem: "geo",
              rippleEffect: {
                brushType: "fill",
              },
              itemStyle: {
                color: "#F4E925",
                shadowBlur: 10,
                shadowColor: "#333",
              },
              showEffectOn: "render", //加载完毕显示特效
              symbolSize: function (val) {
                let value = val[2];
                values.valList.push(value);
                let max = 0;
                if (values.valList.length === 33) {
                  max = values.valList.sort((a, b) => {
                    return b - a;
                  })[0];
                  if (value == max) {
                    return 27;
                  }
                }
                return 10;
              },
              data: [
                {
                  name: "北京市",
                  value: [116.405285, 39.904989, 1001.9542863912998],
                  cityCode: 110000,
                },
                {
                  name: "天津市",
                  value: [117.190182, 39.125596, 2309.996560274196],
                  cityCode: 120000,
                },
                {
                  name: "河北省",
                  value: [114.502461, 38.045474, 102.89833370841262],
                  cityCode: 130000,
                },
                {
                  name: "山西省",
                  value: [112.549248, 37.857014, 2523.912586075361],
                  cityCode: 140000,
                },
                {
                  name: "内蒙古自治区",
                  value: [111.670801, 40.818311, 403.7289590392348],
                  cityCode: 150000,
                },
                {
                  name: "辽宁省",
                  value: [123.429096, 41.796767, 1793.6000732294608],
                  cityCode: 210000,
                },
                {
                  name: "吉林省",
                  value: [125.3245, 43.886841, 2271.0163123012317],
                  cityCode: 220000,
                },
                {
                  name: "黑龙江省",
                  value: [126.642464, 45.756967, 271.9921990533274],
                  cityCode: 230000,
                },
                {
                  name: "上海市",
                  value: [121.472644, 31.231706, 2594.8741597712997],
                  cityCode: 310000,
                },
                {
                  name: "江苏省",
                  value: [118.767413, 32.041544, 2673.4060698283124],
                  cityCode: 320000,
                },
                {
                  name: "浙江省",
                  value: [120.153576, 30.287459, 435.43450030522536],
                  cityCode: 330000,
                },
                {
                  name: "安徽省",
                  value: [117.283042, 31.86119, 1448.184989319236],
                  cityCode: 340000,
                },
                {
                  name: "福建省",
                  value: [119.306239, 26.075302, 247.57014346850625],
                  cityCode: 350000,
                },
                {
                  name: "江西省",
                  value: [115.892151, 28.676493, 251.42543914318227],
                  cityCode: 360000,
                },
                {
                  name: "山东省",
                  value: [117.000923, 36.675807, 744.6875272423665],
                  cityCode: 370000,
                },
                {
                  name: "河南省",
                  value: [113.665412, 34.757975, 2414.4200901081417],
                  cityCode: 410000,
                },
                {
                  name: "湖北省",
                  value: [114.298572, 30.584355, 2457.8115198089067],
                  cityCode: 420000,
                },
                {
                  name: "湖南省",
                  value: [112.982279, 28.19409, 1994.9561508840866],
                  cityCode: 430000,
                },
                {
                  name: "广东省",
                  value: [113.280637, 23.125178, 2748.7537502775413],
                  cityCode: 440000,
                },
                {
                  name: "广西壮族自治区",
                  value: [108.320004, 22.82402, 1395.7333150251027],
                  cityCode: 450000,
                },
                {
                  name: "海南省",
                  value: [110.33119, 20.031971, 2668.314990801876],
                  cityCode: 460000,
                },
                {
                  name: "重庆市",
                  value: [106.504962, 29.533155, 470.8509694638003],
                  cityCode: 500000,
                },
                {
                  name: "四川省",
                  value: [104.065735, 30.659462, 2606.0496875892713],
                  cityCode: 510000,
                },
                {
                  name: "贵州省",
                  value: [106.713478, 26.578343, 280.2378707337034],
                  cityCode: 520000,
                },
                {
                  name: "云南省",
                  value: [102.712251, 25.040609, 1559.5980760905736],
                  cityCode: 530000,
                },
                {
                  name: "西藏自治区",
                  value: [91.132212, 29.660361, 407.3380309757804],
                  cityCode: 540000,
                },
                {
                  name: "陕西省",
                  value: [108.948024, 34.263161, 1364.5941591556661],
                  cityCode: 610000,
                },
                {
                  name: "甘肃省",
                  value: [103.823557, 36.058039, 1509.2864648610093],
                  cityCode: 620000,
                },
                {
                  name: "青海省",
                  value: [101.778916, 36.623178, 463.44989240921166],
                  cityCode: 630000,
                },
                {
                  name: "宁夏回族自治区",
                  value: [106.278179, 38.46637, 2893.6784216270225],
                  cityCode: 640000,
                },
                {
                  name: "新疆维吾尔自治区",
                  value: [87.617733, 43.792818, 1764.7813371944992],
                  cityCode: 650000,
                },
                {
                  name: "台湾省",
                  value: [121.509062, 25.044332, 2323.7348733213453],
                  cityCode: 710000,
                },
                {
                  name: "香港特别行政区",
                  value: [114.173355, 22.320048, 2944.09656697866],
                  cityCode: 810000,
                },
                {
                  name: "澳门特别行政区",
                  value: [113.54909, 22.198951, 969.5500505126003],
                  cityCode: 820000,
                },
              ],
            },
          ],
        });

        // ! 自适应大小
        window.addEventListener("resize", () => {
          myChart.resize();
        });
      });
    });

    // ? 返回能够在部件其余部分的属性或方法
    return {
      getState,
      mapData,
    };
  },
};
</script>

<style>
.map {
  width: 100%;
  height: 100%;
}
</style>
