Vue.createApp({
  data() {
    return {
      time: '',
    }
  },
  methods: {
    showTime(timeoutID) {
      clearTimeout(timeoutID)//清除定时器
      const dt = new Date()
      let y = dt.getFullYear()
      let mt = dt.getMonth() + 1
      let day = dt.getDate()
      let h = dt.getHours()//获取时
      let m = dt.getMinutes()//获取分
      let s = dt.getSeconds()//获取秒
      this.time = '当前时间：' + y + "年" + mt + "月" + day + "-" + h + "时" + m + "分" + s + "秒"
      timeoutID = setTimeout(this.showTime, 1000) //设定定时器，循环运行
    }
  },
  mounted() {
    let t = null
    timeoutID = setTimeout(this.showTime, 1000)//開始运行
    this.showTime()
  }
}).mount('#app')