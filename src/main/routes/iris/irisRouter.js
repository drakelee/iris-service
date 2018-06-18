const Router = require('koa-router')
const irisRouter = new Router()
const irisService = require('../../services/irisService')

irisRouter
    .get('/iris', async (ctx, next) => {
        try {
            const {sepalLength, sepalWidth, petalLength, petalWidth} = ctx.request.query
            ctx.body = await irisService.getIris(sepalLength, sepalWidth, petalLength, petalWidth)
        } catch (e) {
            console.error('Error on getting iris', e)
            throw e
        }
    })

module.exports = irisRouter
