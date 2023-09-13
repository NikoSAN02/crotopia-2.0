"use client"

import React, { useEffect, useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {Button} from "@nextui-org/button";

import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/data/dataActions";
import { connectMM } from "../../redux/blockchain/blockchainActions";
import { connectWC } from "../../redux/blockchain/blockchainActions";

import SelectWalletModal from "./Modal";


var networkName = "CRO";

const networks = {
	CRO: {
		chainId: `0x${Number(25).toString(16)}`,
        chainName: "Cronos Mainnet Beta",
        nativeCurrency: {
          name: "Cronos Mainnet Beta",
          symbol: "CRO",
          decimals: 18
        },
        rpcUrls: ["https://evm.cronos.org"],
        blockExplorerUrls: ["https://cronoscan.com/"]
      },
};

const changeNetwork = async ({ networkName, setError }) => {
	try {
	  if (!window.ethereum) throw new Error("No crypto wallet found");
	  await window.ethereum.request({
	    method: "wallet_addEthereumChain",
	    params: [
	      {
		...networks[networkName]
	      }
	    ]
	  });
	  
	} catch (err) {
	  console.log(err.message);
	}
      };


function Header() {

	const dispatch = useDispatch();
	const blockchain = useSelector((state) => state.blockchain);
	const data = useSelector((state) => state.data);
	const [feedback, setFeedback] = useState("Reveal What Your Destiny Holds!");
	const [claimingNft, setClaimingNft] = useState(false);

    const [selectWalletPopup, setSelectWalletPopup] = useState(false);

   	const [counter, setCounter] = useState(1);
	
	var accountSelected = "";

	const getData = () => {
		if (blockchain.account !== "" && blockchain.smartContract !== null) {
			dispatch(fetchData(blockchain.account));

			accountSelected = blockchain.account;

            document.getElementById('accountHolder').textContent = shorten(accountSelected);
        }
    };

    const shorten = (str) => {
        if (str.length < 10) return str;
        return `${str.slice(0, 6)}...${str.slice(str.length - 4)}`;
      }
    
    const [error, setError] = useState();

    const handleNetworkSwitch = async () => {
        //alert("metamask");
        blockchain.smartContract = null;
        setError();
        await changeNetwork({ networkName, setError });
	    dispatch(connectMM());
        getData();
    };

    const handleDefiConnect = async () => {
        blockchain.smartContract = null;
        setError();
	    dispatch(connectWC());
        getData();
    }
    


	const networkChanged = (chainId) => {
	console.log({ chainId });
    };
    
    const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
	  setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
	  setAnchorEl(null);
	};

	useEffect(() => {

		//getBrowser();
		getData();
    }, [blockchain.account]);



  return (
    <div className='bg-header-bg w-screen'>
    <div className=" flex justify-center items-center gap-6" >
    <div className="h-24 w-24 "><Image src="/images/CRO_logo.png" width="72" height="72"/></div>
    <Link  href="/"><p className=''>Home</p></Link>
    <div> <Link href="/component/unityBuild">Unity Build</Link></div>
    <div> <Link href="/component/burnpage">BURN Page</Link></div>
    <div><button onClick={ () => setSelectWalletPopup(true)} id="accountHolder"><span>Connect Wallet</span></button></div>
    </div>

    <div>
        <SelectWalletModal trigger={selectWalletPopup} setTrigger={setSelectWalletPopup} handleNetworkSwitch={handleNetworkSwitch} handleDefiConnect={handleDefiConnect}></SelectWalletModal>
    </div>
  </div>
  )
}

export default Header