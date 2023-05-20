'use client';

import React from 'react';
import Image from 'next/image';
import { useEthers } from '@usedapp/core';

import ConnectWalletStyles from './ConnectWallet.module.scss';

function ConnectWallet() {
  const { account, activateBrowserWallet, deactivate } = useEthers();

  function concise(str) {
    const str1 = str.substring(0, 6);
    const str2 = str.substring(str.length - 4);

    return `${str1}...${str2}`;
  }

  if (account) {
    return (
      <div className={ConnectWalletStyles.walletConnected}>
        <p>{concise(account)}</p>
        <button
          type="button"
          aria-label="disconnect"
          className={ConnectWalletStyles.cancel}
          onClick={() => deactivate()}
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      className={ConnectWalletStyles.connectButton}
      onClick={() => activateBrowserWallet()}
    >
      <Image src="/icons/wallet.svg" width={16} height={16} alt="Wallet" />
      <p>Connect wallet</p>
    </button>
  );
}

export default ConnectWallet;
