import logo from './logo.svg';
import './App.css';
import WalletCard from './WalletCard';
import { ConstructorFragment } from 'ethers/lib/utils';
import { Wallet } from 'ethers';
import React from 'react';

import Web3 from 'web3';
import ERC20TransferABI from './Contract/contractABI';

class App extends React.Component {
  constructor(props){
    super(props);
    this.contractIntergration = this.contractIntergration.bind(this);
    //need contract and and abi (line 8)
    this.setState({ 
      connect:false,
      contract:"0x6b175474e89094c44da98b954eedeac495271d0f",
    });
  }

  contractIntergration(){
    // https://ethereumdev.io/abi-for-erc20-contract-on-ethereum/
    console.log("contract ingergration doing stuff");
  }

  render(){
    return <div className='App'>
      <WalletCard /> 
      <h4>I"m your nice dapp</h4>
      <p>Nice dapp infomation</p>
      <button onClick={this.contractIntergration}>Thingy</button>
    </div>
  }
}

export default App;
