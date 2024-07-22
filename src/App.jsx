import React, { useMemo } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider, WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  TorusWalletAdapter
} from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from '@solana/web3.js';
import Home from "./pages/Home";
import '@solana/wallet-adapter-react-ui/styles.css';

function App() {
  return (
    <Context>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Context>
  );
}

export default App;

const Context = ({ children }) => {
  const endpoint = useMemo(() => clusterApiUrl('mainnet-beta'), []); // Directly use 'mainnet-beta' for endpoint

  const wallets = useMemo(() => [
    new PhantomWalletAdapter(),
    new SolflareWalletAdapter(),
    new TorusWalletAdapter()
  ], []);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
