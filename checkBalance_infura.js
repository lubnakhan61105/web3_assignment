Web3=require('web3')
console.log(Web3)
const rpcURL="https://ropsten.infura.io/v3/4aa96d9212dc446c92ed35d76fc3c90c";

let web3 = new Web3(rpcURL);
address="0x91db1dB56d1f5926531A448558459989D6324cc2";
web3.eth.getBalance(address, (err, wei) => {
   let balance = web3.utils.fromWei(wei, 'ether')
    console.log("wei",wei);
    console.log("Balance",balance);
  })
