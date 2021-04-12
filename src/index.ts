import Koa from 'koa'
import Router from 'koa-router'
import Logger from 'koa-logger'
import Json from 'koa-json'
import bodyParser from 'koa-bodyparser';
import { web3Router } from './routes';
require('dotenv').config()

const app = new Koa()
const router = new Router()

app.use(bodyParser());
app.use(Json());
app.use(Logger());

app.use(web3Router.routes()).use(web3Router.allowedMethods());
app.listen(process.env.APP_PORT || 3000, () => {
    console.log(`[APP]: Main Server Started on Port ${process.env.APP_PORT}`)
})