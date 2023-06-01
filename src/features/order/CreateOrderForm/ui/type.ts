import { BigNumber } from 'ethers';

export type Props = {
  type: string;
};

export type OrderData = {
  userAddress: string;
  baseToken: string;
  targetToken: string;
  pairFee: number;
  slippage: number;
  baseAmount: BigNumber;
  aimTargetTokenAmount: BigNumber;
  minTargetTokenAmount: BigNumber;
  expiration: number;
  boundOrder: BigNumber;
  action: number;
  data: string;
};

export type DCAOrderData = {
  period: number;
  amountPerPeriod: string;
};

export type TrailingOrderData = {
  baseAmount: string;
  fixingPerStep: string;
  step: number;
};
