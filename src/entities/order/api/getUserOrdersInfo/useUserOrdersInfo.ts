import { Contract, utils } from 'ethers';
import { useCall } from '@usedapp/core';

import { TradingPlatform__factory } from '@/shared/lib/typechain';

import { Props } from './type';

const useUserOrdersInfo = ({ wallet }: Props) => {
  const tradingInterface = new utils.Interface(TradingPlatform__factory.abi);
  const contractAddress = process.env.NEXT_PUBLIC_TRADING_CONTRACT;

  const { value, error } =
    useCall(
      contractAddress && {
        contract: new Contract(contractAddress, tradingInterface),
        method: 'getUserOrdersInfo',
        args: [wallet],
      },
      {
        refresh: 'never',
      },
    ) ?? {};

  if (error) {
    return undefined;
  }

  if (!value) {
    return null;
  }

  return value?.[0];
};

export default useUserOrdersInfo;
