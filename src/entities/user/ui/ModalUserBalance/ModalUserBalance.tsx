import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useEthers } from '@usedapp/core';
import { formatEther } from '@ethersproject/units';
import { BigNumber } from 'ethers';

import ModalContext from '@/appLayer/context/ModalContext';
import useUserBalance from '@/entities/user/api/getUserBalance/useUserBalance';
import useWithdraw from '@/entities/user/api/withdraw/useWithdraw';
import { tokenHelper } from '@/shared/config/token.config';

import ModalUserBalanceStyles from './ModalUserBalance.module.scss';

function ModalUserBalance() {
  const { account } = useEthers();
  const { handleModal } = useContext(ModalContext);
  const { send: withdrawToken } = useWithdraw();

  const userBalance = useUserBalance({
    wallet: account,
    tokenList: [
      '0xfdaf650e710cbb5801aa0a152cf4481f70147890',
      '0x429c90f2a384dbd7a6113cc642296e914445d66e',
    ],
  });

  const handleWithdrawToken = async (token: string, amount: BigNumber) => {
    await withdrawToken(token, amount);
  };

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div className={ModalUserBalanceStyles.overlay} onClick={() => handleModal()} />
      <div className={ModalUserBalanceStyles.container}>
        <div className={ModalUserBalanceStyles.balance}>
          <section className={ModalUserBalanceStyles.section}>
            <div className={ModalUserBalanceStyles.header}>
              <button
                type="button"
                aria-label="Close balance"
                className={ModalUserBalanceStyles.buttonClose}
                onClick={() => handleModal()}
              />
              <h2 className={ModalUserBalanceStyles.title}>Balance</h2>
            </div>
            <div className={ModalUserBalanceStyles.balanceCard}>
              <div className={ModalUserBalanceStyles.tabs}>
                <ul className={ModalUserBalanceStyles.tokens}>
                  {userBalance.map((key) => (
                    <li className={ModalUserBalanceStyles.token}>
                      <div className={ModalUserBalanceStyles.tokenInner}>
                        <Image
                          src={tokenHelper[key.token].icon}
                          alt="Token Icon"
                          width={16}
                          height={16}
                        />
                        <p>{tokenHelper[key.token].name}</p>
                        <Link
                          className={ModalUserBalanceStyles.tokenLink}
                          href={tokenHelper[key.token].explorer}
                          target="_blank"
                        >
                          Open explorer
                        </Link>
                      </div>
                      <p>
                        {`${Number(formatEther(key.balance)).toFixed(4)} ${
                          tokenHelper[key.token].slug
                        }`}{' '}
                      </p>
                      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                      <button
                        type="button"
                        className={ModalUserBalanceStyles.tokenButton}
                        onClick={() => handleWithdrawToken(key.token, key.balance)}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default ModalUserBalance;
