import './App.css';
import WalletCard from './WalletCard';
import React from 'react';

import Web3 from 'web3';
import ERC20TransferABI from './Contract/contractABI';

class App extends React.Component {
  constructor(props){
    super(props);
    this.contractIntergration = this.contractIntergration.bind(this);
    this.setWeb3 = this.setWeb3.bind(this);
    //need contract and and abi (line 8)
    this.setState({ 
      connect:false,
      contract:"0x6b175474e89094c44da98b954eedeac495271d0f",
      rightNetwork:'3',
      web3:null
      // 3 is ropsten test network
    });
  }

  contractIntergration(){
    // https://ethereumdev.io/calling-a-smart-contract-from-javascript/

    // follow structure
    // yourContract.methods.methodname
    /*
      daiToken.methods.balanceOf(senderAddress).call(function(err, res) {
      if (err) {
        console.log("An error occured", err);
        return
      }
        console.log("The balance is: ",res)
      })
    */

  }

  setWeb3(value){
    this.setState( {web3: value});
    console.log(this.state.web3);
  }

  render(){
    return <div className='App'>
      
      <WalletCard chain={'3' /* 3 cause ropsten network is that*/} setterWeb3={this.setWeb3}/> 
      <h4>I"m your nice dapp</h4>
      <p>Nice dapp infomation</p>
      <button onClick={this.contractIntergration}>Thingy</button>
    </div>
  }
}

export default App;
