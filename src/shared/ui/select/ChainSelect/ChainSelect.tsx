'use client';

import { useEffect, useMemo, useState } from 'react';
import Select from 'react-select';
import Image from 'next/image';
import { Goerli, useEthers } from '@usedapp/core';

function ChainSelect() {
  const { chainId, switchNetwork } = useEthers();

  const [isMounted, setIsMounted] = useState(false);
  const [currentChain, setCurrentChain] = useState<any>(null);

  useEffect(() => setIsMounted(true), []);

  const supportedChains = useMemo(
    () => [
      {
        value: Goerli.chainId,
        label: (
          <div className="select__label">
            <Image src="/tokens/ETH.svg" width={20} height={20} alt="Goerli" />
            <p>Goerli</p>
          </div>
        ),
      },
    ],
    [],
  );

  useEffect(() => {
    if (chainId === Goerli.chainId) {
      setCurrentChain(supportedChains[0]);
    } else {
      setCurrentChain(null);
    }
  }, [chainId, supportedChains]);

  const changeNetwork = async (selected) => {
    if (selected.value === Goerli.chainId) {
      switchNetwork(Goerli.chainId).then();
    }
  };

  return isMounted ? (
    <Select
      value={currentChain}
      options={supportedChains}
      onChange={changeNetwork}
      isSearchable={false}
      classNamePrefix="header-select"
      placeholder="Unsupported"
    />
  ) : null;
}

export default ChainSelect;
