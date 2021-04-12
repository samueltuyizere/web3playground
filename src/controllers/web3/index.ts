var Web3 = require('web3');
var web3 = new Web3('http://127.0.0.1:7545');

export async function getAccountBalance(address: string) {
    return await web3.eth.getBalance(address)
}

export async function sendTransaction(fromAddress: string, toAddress: string, amount: number) {
    const object = {
        from: fromAddress,
        to: toAddress,
        value: amount,
        gas: 4712388,
        gasPrice: 100000000000,
    }
    try {
        return await web3.eth.sendTransaction(object)
    } catch (error) {
        throw new Error(`There was an error completing the transaction: ${error.message}`)
    }
}