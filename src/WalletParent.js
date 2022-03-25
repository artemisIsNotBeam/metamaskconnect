import react from 'react'
import Wallet from './Wallet.js'


class WalletPar extends react.Component{
	constructor(props){
		super(props);
		this.state = { 
			web3:null	
		}
	}
	render(){
		return <div>
			<Wallet/>
		</div>
	}
}

export default WalletPar;