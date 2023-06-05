import { useAppSelector } from '@/appLayer/redux/hooks';
import ChartInfo from '@/features/chart/ChartInfo/ChartInfo';
import Chart from '@/features/chart/Chart/Chart';
import getPoolId from '@/shared/config/helper';

import OrderChartStyles from './OrderChart.module.scss';

function OrderChart() {
  const order = useAppSelector((state) => state.order);
  const poolId = getPoolId(order.baseToken, order.targetToken);

  return (
    <section className={OrderChartStyles.section}>
      <div className={OrderChartStyles.container}>
        <ChartInfo baseToken={order.baseToken} targetToken={order.targetToken} poolId={poolId} />
      </div>
      <Chart baseToken={order.baseToken} poolId={poolId} />
    </section>
  );
}

export default OrderChart;
