import { Config, Goerli } from '@usedapp/core';

const config: Config = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: process.env.NEXT_PUBLIC_GOERLI_RPC,
  },
  multicallVersion: 2 as const,
};

export default config;
