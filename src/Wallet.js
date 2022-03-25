import react from 'react'
import {ethers} from 'ethers'
import styles from './Wallet.module.css'
import simple_token_abi from './Contracts/simple_token_abi.json'


class Wallet extends react.Component{
	constructor(props){
		super(props);
		
		this.connectWallet = this.connectWallet.bind(this);
	}

	// I'm gonna have it where you click the button then its decalred as 
	// web3 so its consistent and copy and paste code works better
	connectWallet(){
		console.log("hi");
	}
	// https://docs.metamask.io/guide/getting-started.html#basic-considerations
	render(){
		return <div>
			<h3>hi I am nice website</h3>
			<button onClick={this.connectWallet}>Connect Wallet</button>
			<p>Wallet Adress</p>
		</div>
	}
}

export default Wallet;