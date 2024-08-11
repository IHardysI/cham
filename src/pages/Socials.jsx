import React, { useContext, useEffect } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { UserContext } from '../App.jsx';
import "../styles/Home.scss";
import Header from "../Components/Header";
import Welcome from "../Components/Welcome";
import Nft from "../Components/Nft";
import Footer from "../Components/Footer";
import CardInfo from '../Components/CardInfo.jsx';

function Socials () {
    return (
        <>
            <div className="primordial-wrap">
                <div className="inner-first">
                    <Header />
                    <CardInfo />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Socials