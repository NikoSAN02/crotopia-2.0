import React from "react";
import {Button} from "@nextui-org/button";
import Image from 'next/image'

export default function SelectWalletModal(props) {
	const { handleNetworkSwitch, handleDefiConnect } = props;
	return (props.trigger)? (
		<div>
		<p className='written' >Please Select Wallet</p>
	  <div className="two-wallets" >
		  <Button style={{  padding:"5px" }}
		    onClick={() => {
			handleNetworkSwitch();
			    props.setTrigger(false)
		    }}
		    w="100%">
		      <span className="wallet-meta" > <Image width="30" height="30" src="/images/metamask.png"/> Metamask</span>
		  </Button>
		  <Button style={{  padding:"5px"}}
		    variant="outline"
		    onClick={() => {
			handleDefiConnect();
			    props.setTrigger(false)
		    }}
		    w="100%">
		      <span className="wallet-defi" > <Image width="30" height="30" src="/images/defi.png"/> Defi-Wallet</span>
		</Button>
		{/* <Button onClick={() => props.setTrigger(false)}>Close</Button> */}
		</div>
		</div>
	) : "";
      }
      