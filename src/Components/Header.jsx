import React from "react";
import '../styles/Header.scss';
import coin from '../assets/coin1.png';
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

function Header() {
    const walletButtonStyle = {
        overflow: 'hidden',
        border: '1px solid hsla(0, 0%, 100%, .15)',
        padding: '5px',
        borderRadius: '100px',
        cursor: 'pointer',
        alignItems: 'center',
        backgroundColor: '#ffffff26',
        color: '#fff',
        display: 'inline-flex',
        height: '28px',
        maxWidth: '126px',
        justifyContent: 'center',
        transition: 'all .25s ease',
        WebkitTransition: 'all .25s ease',
        '@media(min-width: 1024px)': {
            padding: '8px',
            height: '52px',
        },
        ':hover': {
            backgroundColor: '#ffffff4d',
        },
    };
    
  return (
    <header className="header" id="up">
      <div className="header-left">
        <div className="header-left-inner-wrap">
          <a href="" className="header-left-x">
            <svg viewBox="0 0 20 20">
              <path fill="white" d="M15.8.9h3.1l-6.7 7.7L20 19.1h-6.2L9 12.7 3.5 19H.4l7.2-8.2L0 .9h6.3l4.4 5.8L15.8.9zm-1.1 16.3h1.7L5.4 2.7H3.6l11.1 14.5z"></path>
            </svg>
          </a>
          <p className="header-left-p">Join us!</p>
        </div>
      </div>
      <div className="header-center">
        <div className="coin-wrap">
          <img className="coin" src={coin} alt="coin" />
        </div>
        <p className="header-center-p">Hamster Clash</p>
      </div>
      <div className="header-right">
        <div className="header-right-btn">
          <span className="header-right-btn-kola">
            <svg className="header-right-icon" viewBox="64 64 896 896" focusable="false" data-icon="group" width="1em" height="1em" aria-hidden="true">
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00FFA3">
                    <animate attributeName="stop-color" values="#00FFA3; #DC1FFF; #9945FF; #00FFA3" dur="4s" repeatCount="indefinite" />
                  </stop>
                  <stop offset="25%" stopColor="#DC1FFF">
                    <animate attributeName="stop-color" values="#DC1FFF; #9945FF; #00FFA3; #DC1FFF" dur="4s" repeatCount="indefinite" />
                  </stop>
                  <stop offset="50%" stopColor="#9945FF">
                    <animate attributeName="stop-color" values="#9945FF; #00FFA3; #DC1FFF; #9945FF" dur="4s" repeatCount="indefinite" />
                  </stop>
                  <stop offset="100%" stopColor="#00FFA3">
                    <animate attributeName="stop-color" values="#00FFA3; #DC1FFF; #9945FF; #00FFA3" dur="4s" repeatCount="indefinite" />
                  </stop>
                </linearGradient>
              </defs>
              <path d="M912 820.1V203.9c28-9.9 48-36.6 48-67.9 0-39.8-32.2-72-72-72-31.3 0-58 20-67.9 48H203.9C194 84 167.3 64 136 64c-39.8 0-72 32.2-72 72 0 31.3 20 58 48 67.9v616.2C84 830 64 856.7 64 888c0 39.8 32.2 72 72 72 31.3 0 58-20 67.9-48h616.2c9.9 28 36.6 48 67.9 48 39.8 0 72-32.2 72-72 0-31.3-20-58-48-67.9zM888 112c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zM136 912c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm0-752c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm704 680H184V184h656v656zm48 72c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24z" fill="url(#gradient)" />
            </svg>
          </span>
        </div>
        <div className="header-right-btn-connect">
          <WalletMultiButton />
        </div>
      </div>
    </header>
  )
}

export default Header;