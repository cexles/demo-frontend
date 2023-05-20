import { Config, Sepolia } from '@usedapp/core';
import { getDefaultProvider } from 'ethers';

const config: Config = {
  readOnlyChainId: Sepolia.chainId,
  readOnlyUrls: {
    [Sepolia.chainId]: getDefaultProvider('sepolia'),
  },
};

export default config;
