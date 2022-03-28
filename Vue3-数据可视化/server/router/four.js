let express = require('express')
let data = require('../mock/four.json')
let router = express.Router()

router.get('/data', (req, res) => {
  res.send({
    msg: "我是 Four 的路由地址",
    chartData: data
  })
})

module.exports = router