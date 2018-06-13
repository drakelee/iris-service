const combineRouters = require('koa-combine-routers')
const irisRouter = require('./routes/iris/irisRouter')

const router = combineRouters([
    irisRouter
])

module.exports = router
