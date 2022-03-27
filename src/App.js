import logo from './logo.svg';
import './App.css';
import WalletCard from './WalletCard';
import { ConstructorFragment } from 'ethers/lib/utils';
import { Wallet } from 'ethers';
import React from 'react';

import ERC20TransferABI from './Contract/contractABI';

class App extends React.Component {
  constructor(props){
    super(props);
    this.contractIntergration = this.contractIntergration.bind(this);
    this.setState({ 
      connect:false,
      contract:"0x6b175474e89094c44da98b954eedeac495271d0f",
      web3: new Web3('http://localhost:8545')
    });
  }

  contractIntergration(){
    
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
