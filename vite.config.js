import { defineConfig } from 'vite';

export default defineConfig({
  optimizeDeps: {
    include: [
      '@solana/wallet-adapter-react',
      '@solana/wallet-adapter-react-ui',
      '@solana/wallet-adapter-wallets'
    ]
  }
});