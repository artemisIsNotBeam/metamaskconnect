import './App.css';
import WalletCard from './WalletCard';
import React from 'react';

import Web3 from 'web3';
import ERC20TransferABI from './Contract/contractABI';

class App extends React.Component {
  constructor(props){
    super(props);
    this.conBut1 = this.conBut1.bind(this);
    this.setWeb3 = this.setWeb3.bind(this);
    //need contract and and abi (line 8)
    this.state = { 
      connect:false,
      contract:"0x6b175474e89094c44da98b954eedeac495271d0f",
      rightNetwork:'3',
      web3:"nothinghere"
      // 3 is ropsten test network
    }
  } 

  conBut1(){
    console.log("hi");
    // https://ethereumdev.io/calling-a-smart-contract-from-javascript/
    if (this.state.web3 === "nothinghere"){
      alert("u gotta connect web3 dummy");
      console.log("error");
    }else{

    


    // let contract = new this.state.web3.eth.Contract(ERC20TransferABI,this.state.contract);


    // follow structure
    // yourContract.methods.methodname
    /*
      contract.methods.balanceOf(senderAddress).call(function(err, res) {
      if (err) {
        console.log("An error occured", err);
        return
      }
        console.log("The balance is: ",res)
      })
    */

    }
  }

  setWeb3(value){
    this.setState( {web3: value});
    console.log(this.state.web3);
  }

  render(){
    return <div className='App'>
      
      <WalletCard chain={'3' /* 3 cause ropsten network is that*/} setterWeb3={this.setWeb3}/> 
      <div id="main">
        <h3>Super Nice Dapp</h3>
        <div id="1button">
          <p>whatever this button does</p>
          <button onClick={this.conBut1}>Do the button</button>
        </div>
      </div>
    </div>
  }
}

export default App;
