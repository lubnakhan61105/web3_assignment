const Tx = require('ethereumjs-tx');

Web3=require('web3')

console.log(Web3)
const rpcURL="https://ropsten.infura.io/v3/4aa96d9212dc446c92ed35d76fc3c90c";

let web3 = new Web3(rpcURL);
const account="0x91db1dB56d1f5926531A448558459989D6324cc2";
const privateKey="3D159DB89E493C489085B38A4485B9A7D4B8E9BACE9945AC40F2A51551CFD847";
const privatekey1=Buffer.from(privateKey,"hex");

const contractAddress="0x50da4294646433B4479974d4b00fFc83224BFdA5";
const abi=[
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "news",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "a",
				"type": "uint256"
			}
		],
		"name": "setNumber",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getNumber",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
const contract=new web3.eth.Contract(abi,contractAddress);

web3.eth.getTransactionCount(account,(error,txCount)=>{
    
    const txObject = {
        nonce:    web3.utils.toHex(txCount),
        gasLimit: web3.utils.toHex(800000),
        gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
        to:contractAddress,
        data:contract.methods.setNumber(3).encodeABI()
      }
    
      //var Tx     = require('ethereumjs-tx')
      const tx=new Tx.Transaction(txObject, {chain :'ropsten'});
      tx.sign(privatekey1)

const serializedTx = tx.serialize()
const raw = '0x' + serializedTx.toString('hex')
web3.eth.sendSignedTransaction(raw,(err,txHash)=>{
    console.log(err);
    console.log(txHash);
});
});
contract.methods.getNumber().call(function(err,result){
    console.log("Number",result);
});