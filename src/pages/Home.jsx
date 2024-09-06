import React, { useContext, useEffect, useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { UserContext } from '../App.jsx';
import "../styles/Home.scss";
import Header from "../Components/Header";
import Welcome from "../Components/Welcome";
import Nft from "../Components/Nft";
import Footer from "../Components/Footer";

function Home() {
  

  const { publicKey } = useWallet();
  const { setWalletAddress } = useContext(UserContext);

  useEffect(() => {
    //console.log("Initializing useEffect, publicKey:", publicKey);
    if (publicKey) {
      const address = publicKey.toString();
      setWalletAddress(address);
      console.log("Connected wallet address:", address);
    } else {
      console.log("No wallet connected or publicKey is null")
      setWalletAddress('')
    }
  }, [publicKey, setWalletAddress]);
  
  

  return (
    <>
      <div className="primordial-wrap">
        <div className="inner-first">
          <Header />
          <Welcome />
        </div>
        <Nft />
      </div>
      <Footer />
    </>
  );
}

export default Home;
