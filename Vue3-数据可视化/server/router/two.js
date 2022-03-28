let express = require('express')
let data = require('../mock/two.json')
let router = express.Router()

router.get('/data', (req, res) => {
  res.send({
    msg: "我是 Two 的路由地址",
    chartData: data
  })
})

module.exports = router