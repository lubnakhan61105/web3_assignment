Web3=require('web3');
console.log(Web3)
const rpcURL="https://ropsten.infura.io/v3/4aa96d9212dc446c92ed35d76fc3c90c";

let web3 = new Web3(rpcURL);
address="0x50da4294646433B4479974d4b00fFc83224BFdA5";
 let abi=[
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
const contract=new web3.eth.Contract(abi,address);
console.log(contract);

contract.getPastEvents(
    'AllEvents',
    {
      fromBlock: 0,
      toBlock: 'latest'
    },
    (err, events) => { console.log(events) }
  )