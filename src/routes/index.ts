import Router from 'koa-router'
import { getAccountBalance, sendTransaction } from '../controllers/web3'

const web3Router = new Router()

web3Router.get('/',
    async ctx => {
        ctx.body = { message: 'Hola!' }
    })

web3Router.get('/address/balance', async ctx => {
    const { address } = ctx.request.body
    const balance = await getAccountBalance(address)
    ctx.body = { balance }
})

web3Router.post('/transaction/send', async ctx => {
    const { fromAddress, toAddress, amount } = ctx.request.body
    const initiateTransaction = await sendTransaction(fromAddress, toAddress, amount)
    ctx.body = { transactionHash: initiateTransaction }
})

export { web3Router }