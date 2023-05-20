import { Config, Goerli } from '@usedapp/core';

const config: Config = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: process.env.NEXT_PUBLIC_GOERLI_RPC,
  },
};

export default config;
