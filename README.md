# OVERVIEW
This Project uses web3JS to interact with a local Ethereum Blockchain network that is running via GANACHE.

## SUPPORTED FEATURES
Currently, 
* You can lookup an address's balance by calling this endpoint `GET /address/balance` and passing the address in the request's body.
* You can also send a transacttion from one address to another by calling this endpoint `POST /transaction/send` and passing the sending address, receiving address and amount as the request's body. the gas and gas price for transaction are manually set for now.

## SOON TO BE ADDED FEATURES
* Transation Lookups
* account & wallets creation