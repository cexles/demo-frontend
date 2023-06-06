import Image from 'next/image';
import React from 'react';

export const allowedTokens = [
  {
    value: '0xfdaf650e710cbb5801aa0a152cf4481f70147890',
    label: (
      <div className="select__label">
        <Image src="/icons/ETH.svg" width={20} height={20} alt="Token A" />
        <p>Token A</p>
      </div>
    ),
  },
  {
    value: '0x429c90f2a384dbd7a6113cc642296e914445d66e',
    label: (
      <div className="select__label">
        <Image src="/icons/KNC.svg" width={20} height={20} alt="Token B" />
        <p>Token B</p>
      </div>
    ),
  },
];

export const tokenHelper = {
  '0xfdaf650e710cbb5801aa0a152cf4481f70147890': {
    name: 'Token A',
    slug: 'ttA',
    decimals: 18,
    icon: '/icons/ETH.svg',
  },
  '0x429c90f2a384dbd7a6113cc642296e914445d66e': {
    name: 'Token B',
    slug: 'ttB',
    decimals: 18,
    icon: '/icons/KNC.svg',
  },
};

export const poolHelper = {
  '0x429c90f2a384dbd7a6113cc642296e914445d66e_0xfdaf650e710cbb5801aa0a152cf4481f70147890': {
    poolId: '0x26001313ad6117dbbeaae71bc187bcbcaf03d3cf',
  },
};
