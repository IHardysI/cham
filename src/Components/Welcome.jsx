import React from "react"
import '../styles/Welcome.scss'
import scroll from '../assets/scroll.svg'
import scrollArrow from '../assets/scroll-arrow.svg'
import solanaImg from "../assets/solanaLogoMark.svg"
import MainButton from "./MainButton"


function Welcome() {
    return (
        <section className="welcome">
            <div className="welcome-texts">
                <h1 className="welcome-h1">Become a unique CEO on Solana</h1>
                <img src={solanaImg} className="welcome-sub"></img>
                <p className="welcome-about">This is the first truly large-scale project on Solana. We invite you to explore the beautiful network of Solana with us. Do assignments, do activities within the network within our project. 
                <br/> Listing coming soon...</p>
                <div className="welcome-btn-container">
                    <MainButton />
                </div>
            </div>
        </section>
    )
}

export default Welcome