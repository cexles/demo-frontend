'use client';

import { ethers } from 'ethers';
import { ERC20 } from '@usedapp/core';

import { Props } from './type';

const getTokenApprove = async ({ tokenAddress, amount }: Props) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const tokenContract = new ethers.Contract(tokenAddress, ERC20.abi, signer);

  const tokenApprove = await tokenContract.approve(
    process.env.NEXT_PUBLIC_TRADING_CONTRACT,
    amount,
  );
  const successTokenApprove = await tokenApprove.wait();

  return successTokenApprove !== null;
};

export default getTokenApprove;
