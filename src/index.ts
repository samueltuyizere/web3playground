import Koa from 'koa'
import Router from 'koa-router'
import Logger from 'koa-logger'
import Json from 'koa-json'
require('dotenv').config()

const app = new Koa()
const router = new Router()

router.get('/', async ctx => {
    ctx.body = { message: 'Welcome onboard' }
})

app.use(Json());
app.use(Logger());

app.use(router.routes()).use(router.allowedMethods());
app.listen(process.env.APP_PORT || 3000, () => {
    console.log(`[APP]: Main Server Started on Port ${process.env.APP_PORT}`)
})