'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { DateTime } from 'luxon';
import { useQuery } from '@apollo/client';

import formatRate from '@/entities/chart/lib/formatRate';
import { tokenHelper } from '@/shared/config/token.config';
import { GET_POOL_PRICE } from '@/shared/lib/graphql/queries';

import ChartInformationStyles from './ChartInformation.module.scss';
import { Props } from './type';

function ChartInformation({ baseToken, targetToken, poolId }: Props) {
  const [tokenPrice, setTokenPrice] = useState<string>('0');
  const { data } = useQuery(GET_POOL_PRICE, {
    variables: {
      poolId,
    },
    pollInterval: 10000,
  });

  useEffect(() => {
    if (data !== undefined) {
      if (data.pool.token0.id === baseToken) {
        setTokenPrice(formatRate(data.pool.token1Price));
      }
      if (data.pool.token1.id === baseToken) {
        setTokenPrice(formatRate(data.pool.token0Price));
      }
    }
  }, [baseToken, data]);

  return (
    <div className={ChartInformationStyles.information}>
      <div className={ChartInformationStyles.tokens}>
        <div className={ChartInformationStyles.icons}>
          <Image
            className={ChartInformationStyles.icon}
            alt={tokenHelper[baseToken].name}
            src={tokenHelper[baseToken].icon}
            width={23}
            height={23}
          />
          <Image
            className={ChartInformationStyles.icon}
            alt={tokenHelper[targetToken].name}
            src={tokenHelper[targetToken].icon}
            width={23}
            height={23}
          />
        </div>
        <p>{`${tokenHelper[baseToken].name}/${tokenHelper[targetToken].name}`}</p>
      </div>
      <div className={ChartInformationStyles.tradeInfo}>
        <span className={ChartInformationStyles.boldText}>{tokenPrice}</span>
        {` ${tokenHelper[baseToken].slug}/${tokenHelper[targetToken].slug}`}
      </div>
      <p className={ChartInformationStyles.date}>
        {DateTime.now().toUTC().toFormat('LLL dd, yyyy, h:mm a')} (UTC)
      </p>
    </div>
  );
}

export default ChartInformation;
