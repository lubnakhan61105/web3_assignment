

console.log(Web3)
const rpcURL="HTTP://127.0.0.1:7545";
let web3 = new Web3(rpcURL);
address="0x6Db51807da7F7DFD6d35d2Ec20C5864826B724f4";
web3.eth.getBalance(address, (err, wei) => {
   let balance = web3.utils.fromWei(wei, 'ether')
    console.log("wei",wei);
    console.log("Balance",balance);
  })
