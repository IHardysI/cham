import React, { useMemo, useState, useContext, createContext } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  TorusWalletAdapter
} from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from '@solana/web3.js';
import Home from "./pages/Home";
import '@solana/wallet-adapter-react-ui/styles.css';
import Socials from './pages/Socials.jsx';

// UserContext to hold wallet address
export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState(null);

  return (
    <UserContext.Provider value={{ walletAddress, setWalletAddress }}>
      {children}
    </UserContext.Provider>
  );
};

const App = () => {
  const endpoint = useMemo(() => clusterApiUrl('mainnet-beta'), []);
  const wallets = useMemo(() => [
    new PhantomWalletAdapter(),
    new SolflareWalletAdapter(),
    new TorusWalletAdapter()
  ], []);

  return (
    <UserProvider>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/socials" element={<Socials />} />
              </Routes>
            </BrowserRouter>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </UserProvider>
  );
};

export default App;
