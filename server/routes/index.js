const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Express server 已启动!')
})

module.exports = router