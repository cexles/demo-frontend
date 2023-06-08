'use client';

import { useContext } from 'react';

import ModalContext from '@/appLayer/context/ModalContext';
import { useAppSelector } from '@/appLayer/redux/hooks';
import Chart from '@/entities/chart/ui/Chart/Chart';
import ChartInformation from '@/entities/chart/ui/ChartInformation/ChartInformation';
import getPoolId from '@/entities/chart/lib/getPoolId';
import useScreenWidth from '@/shared/lib/theme/useScreenWidth';

import OrderChartStyles from './OrderChart.module.scss';

function OrderChart() {
  const order = useAppSelector((state) => state.order);
  const { openModal } = useContext(ModalContext);
  const poolId = getPoolId(order.baseToken, order.targetToken);
  const width = useScreenWidth();

  if (width < 1024 && !openModal) return '';

  return (
    <section className={OrderChartStyles.section}>
      <div className={OrderChartStyles.container}>
        <ChartInformation
          baseToken={order.baseToken}
          targetToken={order.targetToken}
          poolId={poolId}
        />
      </div>
      <Chart baseToken={order.baseToken} poolId={poolId} />
    </section>
  );
}

export default OrderChart;
