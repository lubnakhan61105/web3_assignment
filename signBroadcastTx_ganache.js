Web3=require('web3');
const Tx = require('ethereumjs-tx');

console.log(Web3)
const rpcURL="HTTP://127.0.0.1:7545";

let web3 = new Web3(rpcURL);

const sender="0x6Db51807da7F7DFD6d35d2Ec20C5864826B724f4";
const receiver="0x621a024f22cC15fe130833c1F695Dd16cA5a46D4";

const privateKey="2c67eecc135607c7edf48173be68bfc44f3c1df0582059fbd0b64f43897c861a";
privateKey2="3f7b1da2469d51bc8903e74c8f41a1b793d12634f7f73cd0f67f319a535093b5";

const privatekey1=Buffer.from(privateKey,"hex");
const private_Key2=Buffer.from(privateKey2,"hex");

console.log(privatekey1);

web3.eth.getTransactionCount(sender,(error,txCount)=>{
    console.log(txCount);
    const txObject = {
        nonce:    web3.utils.toHex(txCount),
        to:       receiver,
        value:    web3.utils.toHex(web3.utils.toWei('10', 'ether')),
        gasLimit: web3.utils.toHex(21000),
        gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
      }
    
      //var Tx     = require('ethereumjs-tx')
      const tx=new Tx.Transaction(txObject)
      tx.sign(privatekey1)

const serializedTx = tx.serialize()
const raw = '0x' + serializedTx.toString('hex')
web3.eth.sendSignedTransaction(raw,(err,txHash)=>{
    console.log(err);
    console.log(txHash);
})
});