// * 时间显示模块
let timeoutID = setTimeout(time, 1000)
function time(timeoutID) {
  clearTimeout(timeoutID)
  const now = new Date()
  let year = now.getFullYear()
  let month = now.getMonth() + 1
  let date = now.getDate()
  let hour = now.getHours()
  let min = now.getMinutes()
  let sec = now.getSeconds()
  
  let nowTime = `当前时间：${year}年${timeFill(month)}月${timeFill(date)}日 - ${timeFill(hour)}时${timeFill(min)}分${timeFill(sec)}秒`

  document.querySelector('.show-time').textContent = nowTime

  function timeFill(timeStr) {
    if (typeof timeStr !== 'string') timeStr = timeStr.toString()
    // ? 时间显示默认至少两位数
    return timeStr.padStart(2, '0')
  }

  // ? 循环运行
  timeoutID = setTimeout(time, 1000)
}

// * 柱状图模块1
;(function () {
  let chart = echarts.init(document.querySelector('.bar .chart'))
  let option = {
    color: ["#2f89cf"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    legend: {
      show: false
    },
    // ? 设置坐标轴的大小
    grid: {
      top: "10px",
      bottom: "4%",
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        data: [ "旅游行业","教育培训", "游戏行业", "医疗行业", "电商行业", "社交行业", "金融行业" ],
        axisTick: {
          alignWithLabel: true
        },
        // ? 刻度标签样式
        axisLabel: {
          color: "rgba(255,255,255,.6)",
          fontSize: "12"
        },
        // ? x轴轴线的样式
        axisLine: {
          show: false
        },
      }
    ],
    yAxis: [
      {
        type: "value",
        axisLabel: {
          color: "rgba(255,255,255,.6)",
          fontSize: "12"
        },
        axisLine: {
          lineStyle: {
            show: true,
            color: "rgba(255,255,255,.1)",
          }
        },
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
      {
        name: "直接访问",
        type: "bar",
        barWidth: "35%",
        data: [200, 300, 300, 900, 1500, 1200, 600],
        itemStyle: {
          // ? 修改柱子圆角
          barBorderRadius: 5
        }
      }
    ]
  }

  chart.setOption(option)

  // ! 图标容器自适应大小
  window.addEventListener("resize", () => {
    chart.resize()
  })
})()

// * 柱状图模块2
;(function () {
  let chart = echarts.init(document.querySelector('.bar2 .chart'))
  // ? 设置颜色数组用于柱子的颜色获取
  let myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"]
  let option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      top: "10%",
      left: "22%",
      bottom: "10%"
    },
    // ? 不显示 x轴
    xAxis: {
      show: false
    },
    yAxis: [
      {
        type: "category",
        // ? 反转坐标轴
        inverse: true,
        data: ["HTML5", "CSS3", "javascript", "VUE", "NODE"],
        // 不显示y轴的线
        axisLine: {
          show: false
        },
        // 不显示刻度
        axisTick: {
          show: false
        },
        // 把刻度标签里面的文字颜色设置为白色
        axisLabel: {
          color: "#fff"
        }
      },
      {
        // ? 反转坐标轴
        inverse: true,
        data: [702, 350, 610, 793, 664],
        // 不显示y轴的线
        axisLine: {
          show: false
        },
        // 不显示刻度
        axisTick: {
          show: false
        },
        axisLabel: {
          textStyle: {
            fontSize: 12,
            color: "#fff"
          }
        }
      }
    ],
    series: [
      {
        name: '条',
        type: 'bar',
        // ? 柱子之间的距离
        barCateGoryGap: 50,
        // ? 柱子显示的宽度
        barWidth: 10,
        itemStyle: {
          barBorderRadius: 20,
          // ? 柱子的显示颜色
          color: function(params) {
            return myColor[params.dataIndex]
          }
        },
        // ? 数值标签
        label: {
          show: true,
          position: "inside",
          formatter: "{c}%"  // {c} 代表数值
        },
        // ! 设置柱子的层叠（类似 z-index）
        yAxisIndex: 0,
        data: [70, 34, 60, 78, 69]
      },
      {
        name: '框',
        type: 'bar',
        barCategoryGap: 50,
        barWidth: 15,
        itemStyle: {
            // ? 镂空颜色
            color: "none",
            borderColor: "#00c1de",
            borderWidth: 3,
            barBorderRadius: 15
        },
        // ! 设置柱子的层叠（类似 z-index）
        yAxisIndex: 1,
        data: [100, 100, 100, 100, 100]
      }
    ]
  };
  // * 实例应用设置
  chart.setOption(option)

  // ! 设置自适应大小
  window.addEventListener('resize', () => {
    chart.resize()
  })
})()

// * 折线图模块1
;(function () {
  const yearData = [
    {
      year: "2020", // 年份
      data: [
        // 两个数组是因为有两条线
        [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
        [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
      ]
    },
    {
      year: "2021", // 年份
      data: [
        // 两个数组是因为有两条线
        [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
        [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
      ]
    }
  ]
  let chart = echarts.init(document.querySelector('.line .chart'))
  let option = {
    // ? 指定不同组数据的显示颜色
    color: ['#00f2f1', '#ed3f35'],
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      textStyle: {
        color: '#4c9bfd'
      },
      // ? 指定图例组件的位置
      right: '10%',
    },
    grid: {
      top: '20%',
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
      // ? 网格四周有边框
      show: true,
      borderColor: '#012f4a'
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      axisLabel: {
        color: '#4c9bfd'
      },
      axisTick: {
        show: false
      },
      // x轴的轴线
      axisLine: {
        show: false
      }
    },
    yAxis: {
      type: 'value',
      axisTick: {
        show: false
      },
      axisLabel: {
        color: '#4c9bfd'
      },
      // Grid 区域中的分隔线
      splitLine: {
        lineStyle: {
          color: '#012f4a'
        }
      }
    },
    series: [
      {
        name: '新增粉丝',
        type: 'line',
        stack: 'Total',
        // 默认的是 2020年的数据
        data: yearData[0].data[0],
        // ? 平滑曲线显示
        smooth: true
      },
      {
        name: '新增游客',
        type: 'line',
        stack: 'Total',
        data: yearData[0].data[1],
        // ? 平滑曲线显示
        smooth: true
      }
    ]
  }
  // * 实例应用设置
  chart.setOption(option)
  // ! 设置自适应大小
  window.addEventListener('resize', () => {
    chart.resize()
  })

  // * 点击年份切换对应数据
  document.querySelectorAll('.line h2 a').forEach((el, idx) => {
    el.addEventListener('click', evt => {
      // ? 按照对应的索引号设置图表数值
      option.series[0].data = yearData[idx].data[0]
      option.series[1].data = yearData[idx].data[1]
      // ? 为图表实例应用新的设置，重新渲染
      chart.setOption(option)
      evt.preventDefault()
    })
  })
})()

// * 折线图模块2
;(function () {
  let chart = echarts.init(document.querySelector('.line2 .chart'))
  let option = {
    legend: {
      top: '0%',
      textStyle: {
        color: 'rgba(255,255,255,.5)',
        fontSize: 12
      }
    },
    tooltip: {
      trigger: 'axis',
    },
    grid: {
      top: 30,
      right: 10,
      left: 10,
      bottom: 10,
      // 网格区域的大小是否将坐标轴标签所占空间计算在内
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        axisLabel: {
          textStyle: {
            color: 'rgba(255,255,255,.6)',
            fontSize: 12
          }
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.2)'
          }
        },
        data: [ "01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","26","28","29","30"],
      },
    ],
    yAxis: [
      {
        type: 'value',
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        },
        axisTick: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
          }
        },
      }
    ],
    series: [
      {
        name: '播放量',
        type: 'line',
        stack: 'Total',
        // ? 单独修改当前线条的样式
        lineStyle: {
          color: "#0184d5",
          width: 2
        },
        // ? 数值填充区域的样式
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0, 
                color: 'rgba(1, 132, 213, 0.4)' // 0% 处的颜色
            }, {
                offset: 0.8, 
                color: 'rgba(1, 132, 213, 0.1)' // 100% 处的颜色
            }],
            global: false // 缺省为 false
          },
          shadowColor: 'rgba(0, 0, 0, 0.1)'
        },
        emphasis: {
          focus: 'series'
        },
        smooth: true,
        // ? 设置拐点为小圆点
        symbol: 'circle',
        symbolSize: 8,
        itemStyle: {
          color: "#0184d5",
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: 12
        },
        // ! 开始不显示拐点，鼠标经过才显示
        showSymbol: false,
        data: [ 30, 40, 30, 40,30, 40, 30,60,20, 40, 30, 40, 30, 40,30, 40, 30,60,20, 40, 30, 40, 30, 40,30, 40, 20,60,50, 40],
      },
      {
        name: '转发量',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        smooth: true,
        lineStyle: {
          normal: {
            color: "#00d887",
            width: 2
          }
        },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0, 
                color: 'rgba(0, 216, 135, 0.4)' // 0% 处的颜色
            }, {
                offset: 0.8, 
                color: 'rgba(0, 216, 135, 0.1)' // 100% 处的颜色
            }],
            global: false // 缺省为 false
          }
        },
        // 设置拐点 小圆点
        symbol: "circle",
        // 拐点大小
        symbolSize: 5,
        // 设置拐点颜色以及边框
         itemStyle: {
            color: "#00d887",
            borderColor: "rgba(221, 220, 107, .1)",
            borderWidth: 12
        },
        // 开始不显示拐点， 鼠标经过显示
        showSymbol: false,
        data: [ 130, 10, 20, 40,30, 40, 80,60,20, 40, 90, 40,20, 140,30, 40, 130,20,20, 40, 80, 70, 30, 40,30, 120, 20,99,50, 20],
      }
    ]
  };
  chart.setOption(option)

  // ! 图表自适应大小
  window.addEventListener('resize', () => {
    chart.resize()
  })
})()

// * 饼图模块1
;(function () {
  let chart = echarts.init(document.querySelector('.pie .chart'))
  let option = {
    color: ["#065aab", "#066eab", "#0682ab", "#0696ab", "#06a0ab",],
    tooltip: {
      trigger: 'item'
    },
    // ? 图例组件样式
    legend: {
      bottom: "0%",
      left: 'center',
      // ? 小图标的宽度和高度
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: 'rgba(255,255,255,.5)',
        fontSize: 12
      }
    },
    series: [
      {
        name: '年龄分布',
        type: 'pie',
        // ? 圆心坐标(横坐标和纵坐标)
        center: ["50%", "45%"],
        // ? 修改内圆半径和外圆半径，百分比相对于较小边决定
        radius: ["40%", "60%"],
        avoidLabelOverlap: false,
        label: {
          // ? 不显示标签文字
          show: false
        },
        labelLine: {
          // ? 不显示标签的连接线
          show: false
        },
        data: [
          { value: 1, name: "0岁以下" },
          { value: 4, name: "20-29岁" },
          { value: 2, name: "30-39岁" },
          { value: 2, name: "40-49岁" },
          { value: 1, name: "50岁以上" }
        ]
      }
    ]
  }
  chart.setOption(option)

  // ! 图表自适应大小
  window.addEventListener('resize', () => {
    chart.resize()
  })
})()

// * 饼图模块2
;(function () {
  let chart = echarts.init(document.querySelector('.pie2 .chart'))
  let option = {
    // ? 自定义颜色
    color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
    legend: {
      bottom: 0,
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: 'rgba(255,255,255,.5)',
        fontSize: 12
      }
    },
    grid: {
      containLabel: false
    },
    series: [
      {
        name: '地区分布',
        type: 'pie',
        // ? 修改内外圆半径大小
        radius: ['10%', '70%'],
        center: ['50%', '50%'],
        // ? 同时通过圆心角和半径大小来展示数据大小
        roseType: 'radius',
        itemStyle: {
          borderRadius: 8
        },
        // ? 设置文本标签的相关样式
        label: {
          fontSize: 10
        },
        // ? 引导线的设置
        labelLine: {
          // 第一段 - 连接图表
          length: 6,
          // 第二段 - 连接文字
          length: 8
        },
        data: [
          { value: 20, name: '云南' },
          { value: 26, name: '北京' },
          { value: 24, name: '山东' },
          { value: 25, name: '河北' },
          { value: 20, name: '江苏' },
          { value: 25, name: '浙江' },
          { value: 30, name: '四川' },
          { value: 42, name: '湖北' }
        ]
      }
    ]
  };
  chart.setOption(option)

  // ! 自适应大小
  window.addEventListener('resize', () => {
    chart.resize()
  })
})()

// * 模拟航线地图模块
;(function () {
  let chart = echarts.init(document.querySelector('.map .chart'))
  const geoCoordMap = {
    上海: [121.4648, 31.2891],
    东莞: [113.8953, 22.901],
    东营: [118.7073, 37.5513],
    中山: [113.4229, 22.478],
    临汾: [111.4783, 36.1615],
    临沂: [118.3118, 35.2936],
    丹东: [124.541, 40.4242],
    丽水: [119.5642, 28.1854],
    乌鲁木齐: [87.9236, 43.5883],
    佛山: [112.8955, 23.1097],
    保定: [115.0488, 39.0948],
    兰州: [103.5901, 36.3043],
    包头: [110.3467, 41.4899],
    北京: [116.4551, 40.2539],
    北海: [109.314, 21.6211],
    南京: [118.8062, 31.9208],
    南宁: [108.479, 23.1152],
    南昌: [116.0046, 28.6633],
    南通: [121.1023, 32.1625],
    厦门: [118.1689, 24.6478],
    台州: [121.1353, 28.6688],
    合肥: [117.29, 32.0581],
    呼和浩特: [111.4124, 40.4901],
    咸阳: [108.4131, 34.8706],
    哈尔滨: [127.9688, 45.368],
    唐山: [118.4766, 39.6826],
    嘉兴: [120.9155, 30.6354],
    大同: [113.7854, 39.8035],
    大连: [122.2229, 39.4409],
    天津: [117.4219, 39.4189],
    太原: [112.3352, 37.9413],
    威海: [121.9482, 37.1393],
    宁波: [121.5967, 29.6466],
    宝鸡: [107.1826, 34.3433],
    宿迁: [118.5535, 33.7775],
    常州: [119.4543, 31.5582],
    广州: [113.5107, 23.2196],
    廊坊: [116.521, 39.0509],
    延安: [109.1052, 36.4252],
    张家口: [115.1477, 40.8527],
    徐州: [117.5208, 34.3268],
    德州: [116.6858, 37.2107],
    惠州: [114.6204, 23.1647],
    成都: [103.9526, 30.7617],
    扬州: [119.4653, 32.8162],
    承德: [117.5757, 41.4075],
    拉萨: [91.1865, 30.1465],
    无锡: [120.3442, 31.5527],
    日照: [119.2786, 35.5023],
    昆明: [102.9199, 25.4663],
    杭州: [119.5313, 29.8773],
    枣庄: [117.323, 34.8926],
    柳州: [109.3799, 24.9774],
    株洲: [113.5327, 27.0319],
    武汉: [114.3896, 30.6628],
    汕头: [117.1692, 23.3405],
    江门: [112.6318, 22.1484],
    沈阳: [123.1238, 42.1216],
    沧州: [116.8286, 38.2104],
    河源: [114.917, 23.9722],
    泉州: [118.3228, 25.1147],
    泰安: [117.0264, 36.0516],
    泰州: [120.0586, 32.5525],
    济南: [117.1582, 36.8701],
    济宁: [116.8286, 35.3375],
    海口: [110.3893, 19.8516],
    淄博: [118.0371, 36.6064],
    淮安: [118.927, 33.4039],
    深圳: [114.5435, 22.5439],
    清远: [112.9175, 24.3292],
    温州: [120.498, 27.8119],
    渭南: [109.7864, 35.0299],
    湖州: [119.8608, 30.7782],
    湘潭: [112.5439, 27.7075],
    滨州: [117.8174, 37.4963],
    潍坊: [119.0918, 36.524],
    烟台: [120.7397, 37.5128],
    玉溪: [101.9312, 23.8898],
    珠海: [113.7305, 22.1155],
    盐城: [120.2234, 33.5577],
    盘锦: [121.9482, 41.0449],
    石家庄: [114.4995, 38.1006],
    福州: [119.4543, 25.9222],
    秦皇岛: [119.2126, 40.0232],
    绍兴: [120.564, 29.7565],
    聊城: [115.9167, 36.4032],
    肇庆: [112.1265, 23.5822],
    舟山: [122.2559, 30.2234],
    苏州: [120.6519, 31.3989],
    莱芜: [117.6526, 36.2714],
    菏泽: [115.6201, 35.2057],
    营口: [122.4316, 40.4297],
    葫芦岛: [120.1575, 40.578],
    衡水: [115.8838, 37.7161],
    衢州: [118.6853, 28.8666],
    西宁: [101.4038, 36.8207],
    西安: [109.1162, 34.2004],
    贵阳: [106.6992, 26.7682],
    连云港: [119.1248, 34.552],
    邢台: [114.8071, 37.2821],
    邯郸: [114.4775, 36.535],
    郑州: [113.4668, 34.6234],
    鄂尔多斯: [108.9734, 39.2487],
    重庆: [107.7539, 30.1904],
    金华: [120.0037, 29.1028],
    铜川: [109.0393, 35.1947],
    银川: [106.3586, 38.1775],
    镇江: [119.4763, 31.9702],
    长春: [125.8154, 44.2584],
    长沙: [113.0823, 28.2568],
    长治: [112.8625, 36.4746],
    阳泉: [113.4778, 38.0951],
    青岛: [120.4651, 36.3373],
    韶关: [113.7964, 24.7028]
  };

  const XAData = [
    [{ name: "西安" }, { name: "北京", value: 100 }],
    [{ name: "西安" }, { name: "上海", value: 100 }],
    [{ name: "西安" }, { name: "广州", value: 100 }],
    [{ name: "西安" }, { name: "西宁", value: 100 }],
    [{ name: "西安" }, { name: "拉萨", value: 100 }]
  ];

  const XNData = [
    [{ name: "西宁" }, { name: "北京", value: 100 }],
    [{ name: "西宁" }, { name: "上海", value: 100 }],
    [{ name: "西宁" }, { name: "广州", value: 100 }],
    [{ name: "西宁" }, { name: "西安", value: 100 }],
    [{ name: "西宁" }, { name: "银川", value: 100 }]
  ];

  const YCData = [
    [{ name: "拉萨" }, { name: "北京", value: 100 }],
    [{ name: "拉萨" }, { name: "潍坊", value: 100 }],
    [{ name: "拉萨" }, { name: "哈尔滨", value: 100 }]
  ];

  const planePath =
    "path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z";
  //var planePath = 'arrow';
  const convertData = function(data) {
    let res = [];
    for (let i = 0; i < data.length; i++) {
      let dataItem = data[i];

      let fromCoord = geoCoordMap[dataItem[0].name];
      let toCoord = geoCoordMap[dataItem[1].name];
      if (fromCoord && toCoord) {
        res.push({
          fromName: dataItem[0].name,
          toName: dataItem[1].name,
          coords: [fromCoord, toCoord],
          value: dataItem[1].value
        });
      }
    }
    return res;
  };

  const color = ["#fff", "#fff", "#fff"]; //航线的颜色
  let series = [];
  [
    ["西安", XAData],
    ["西宁", XNData],
    ["银川", YCData]
  ].forEach(function(item, i) {
    series.push(
      {
        name: item[0] + " Top3",
        type: "lines",
        zlevel: 1,
        effect: {
          show: true,
          period: 6,
          trailLength: 0.7,
          color: "red", //arrow箭头的颜色
          symbolSize: 3
        },
        lineStyle: {
          normal: {
            color: color[i],
            width: 0,
            curveness: 0.2
          }
        },
        data: convertData(item[1])
      },
      {
        name: item[0] + " Top3",
        type: "lines",
        zlevel: 2,
        symbol: ["none", "arrow"],
        symbolSize: 10,
        effect: {
          show: true,
          period: 6,
          trailLength: 0,
          symbol: planePath,
          symbolSize: 15
        },
        lineStyle: {
          normal: {
            color: color[i],
            width: 1,
            opacity: 0.6,
            curveness: 0.2
          }
        },
        data: convertData(item[1])
      },
      {
        name: item[0] + " Top3",
        type: "effectScatter",
        coordinateSystem: "geo",
        zlevel: 2,
        rippleEffect: {
          brushType: "stroke"
        },
        label: {
          normal: {
            show: true,
            position: "right",
            formatter: "{b}"
          }
        },
        symbolSize: function(val) {
          return val[2] / 8;
        },
        itemStyle: {
          normal: {
            color: color[i]
          },
          emphasis: {
            areaColor: "#2B91B7"
          }
        },
        data: item[1].map(function(dataItem) {
          return {
            name: dataItem[1].name,
            value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
          }
        })
      }
    )
  })
  // ? 自定义配置项
  const option = {
    tooltip: {
      trigger: "item",
      formatter: function(params, ticket, callback) {
        if (params.seriesType == "effectScatter") {
          return "线路：" + params.data.name + "" + params.data.value[2];
        } else if (params.seriesType == "lines") {
          return (
            params.data.fromName +
            ">" +
            params.data.toName +
            "<br />" +
            params.data.value
          );
        } else {
          return params.name;
        }
      }
    },

    geo: {
      map: "china",
      label: {
        emphasis: {
          show: true,
          color: "#fff"
        }
      },
      roam: false,
      //   放大我们的地图
      zoom: 1.2,
      itemStyle: {
        normal: {
          // ? 修改地图省份的背景颜色
          areaColor: "rgba(43, 196, 243, 0.42)",
          borderColor: "rgba(43, 196, 243, 1)",
          borderWidth: 1
        },
        emphasis: {
          areaColor: "#2B91B7"
        }
      }
    },
    series: series
  }
  chart.setOption(option)

  window.addEventListener('resize', () => {
    chart.resize()
  })
})()