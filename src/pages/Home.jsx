import React from "react";
import "../styles/Home.scss";
import Header from "../Components/Header";
import Welcome from "../Components/Welcome";
import Nft from "../Components/Nft";
import Footer from "../Components/Footer";

function Home() {
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
    )
}

export default Home;