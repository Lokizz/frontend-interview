let express = require('express')
let mapData = require('../mock/china.json')
let router = express.Router()

router.get('/data', (req, res) => {
  res.send({
    msg: "我是地图的路由地址",
    chinaData: mapData
  })
})

module.exports = router