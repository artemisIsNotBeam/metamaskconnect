import react from 'react'
import Wallet from './Wallet.js'


class WalletPar extends react.Component{
	constructor(props){
		super(props);
		this.state = { 
			web3:"not connect yet"	
		}
        this.Walletconnection = this.Walletconnection.bind(this);
	}

    Walletconnection(){
        this.setState({web3:"nice message"});
    }

	render(){
		return <div>
			<Wallet web3={this.state.web3} connectionFunction={this.Walletconnection}/>
		</div>
	}
}

export default WalletPar;