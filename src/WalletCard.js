// https://docs.metamask.io/guide/ethereum-provider.html#using-the-provider

import React, {useState} from 'react'
import {ethers} from 'ethers'
import './WalletCard.css'

const WalletCard = () => {

	const [errorMessage, setErrorMessage] = useState(null);
	const [defaultAccount, setDefaultAccount] = useState(null);
	const [userBalance, setUserBalance] = useState(null);
	const [connButtonText, setConnButtonText] = useState('Connect Wallet');

	//NOTEE X Defi dosen't work with this.
	const connectWalletHandler = () => {
		if (window.ethereum && window.ethereum.isMetaMask) {
			console.log('MetaMask Here!');
			// run the metmask request Accounts
			window.ethereum.request({ method: 'eth_requestAccounts'})
			.then(result => {
				accountChangedHandler(result[0]);
				setConnButtonText('Wallet Connected');
				getAccountBalance(result[0]);
			})
			.catch(error => {
				alert("error conencting, check console");
				setErrorMessage(error.message);
			});
		} else {
			alert("need to install Metamask");
			setErrorMessage('Please install MetaMask browser extension to interact');
		}
	}

	// update account, will cause component re-render
	const accountChangedHandler = (newAccount) => {
		setDefaultAccount(newAccount);
		getAccountBalance(newAccount.toString());
	}

	const getAccountBalance = (account) => {

		window.ethereum.request({method: 'eth_getBalance', params: [account, 'latest']})
		.then(balance => {
			//format otherwise returns 0xwjksjdl;aw
			setUserBalance(ethers.utils.formatEther(balance));
		})
		.catch(error => {
			setErrorMessage(error.message);
		});
	};

	const chainChangedHandler = () => {
		// reload the page to avoid any errors with chain change mid use of application
		window.location.reload();
	}

	const converWallet = (Address) => {
		//convert to array
		let thing = Array.from(Address);
		//get 5 last items
		let Last = thing.slice(Math.max(thing.length - 5, 0));
		return "0x....."+Last.join('')
	}


	// listen for account changes
	window.ethereum.on('accountsChanged', accountChangedHandler);

	window.ethereum.on('chainChanged', chainChangedHandler);
	
	return (
		<div className='walletCard'>
			<button onClick={connectWalletHandler}>{connButtonText}</button>
			<div className='accountDisplay'>
				<h3>Address: {defaultAccount ? converWallet(defaultAccount) : ""}</h3>
			</div>
			<div className='balanceDisplay'>
				<h3>Balance: {Math.floor(userBalance)}</h3>
			</div>
			{errorMessage}
		</div>
	);
}

export default WalletCard;