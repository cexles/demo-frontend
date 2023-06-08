import { Contract, utils } from 'ethers';
import { useCalls } from '@usedapp/core';

import { TradingPlatform__factory } from '@/shared/lib/typechain';

import { Props } from './type';

const useUserBalance = ({ wallet, tokenList }: Props) => {
  const tradingInterface = new utils.Interface(TradingPlatform__factory.abi);
  const contractAddress = process.env.NEXT_PUBLIC_TRADING_CONTRACT;
  const balance = [];

  const calls =
    tokenList.map((token) => ({
      contract: new Contract(contractAddress, tradingInterface),
      method: 'getUserBalance',
      args: [wallet, token],
    })) ?? [];

  const results = useCalls(calls) ?? [];

  results.forEach((result, id) => {
    if (result && result.error) {
      // eslint-disable-next-line no-console
      console.error(
        `Error encountered calling 'getUserBalance' on ${calls[id]?.contract.address}: ${result.error.message}`,
      );
    }

    if (result && result.error === undefined) {
      balance.push({
        token: tokenList[id],
        balance: result.value?.[0],
      });
    }
  });

  return balance;
};

export default useUserBalance;
