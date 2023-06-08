import { Contract, utils } from 'ethers';
import { useContractFunction } from '@usedapp/core';

import { TradingPlatform__factory } from '@/shared/lib/typechain';

const useWithdraw = () => {
  const tradingInterface = new utils.Interface(TradingPlatform__factory.abi);
  const contractAddress = process.env.NEXT_PUBLIC_TRADING_CONTRACT;

  const { state, send } = useContractFunction(
    new Contract(contractAddress, tradingInterface),
    'withdraw',
  );

  return { state, send };
};

export default useWithdraw;
