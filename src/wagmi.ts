import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
  sepolia,
  hardhat
} from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains: [
    sepolia,
    hardhat,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [sepolia, hardhat] : []),
  ],
  ssr: true,
});