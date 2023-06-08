'use client';

import { useContext, useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { useQuery } from '@apollo/client';
import { DateTime } from 'luxon';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from 'chart.js';

import ThemeContext from '@/appLayer/context/ThemeContext';
import convertPrice from '@/entities/chart/lib/convertPrice';
import { COLOR_BLACK, COLOR_LIGHT_GRAY } from '@/shared/lib/theme/colors';
import { GET_POOL_TIME_SWAPS } from '@/shared/lib/graphql/queries';

import ChartStyles from './Chart.module.scss';
import { Props } from './type';

function Chart({ baseToken, poolId }: Props) {
  const { theme } = useContext(ThemeContext);
  const [chartValues, setChartValues] = useState<number[]>([]);
  const [chartLabels, setChartLabels] = useState<number[]>([]);
  const [currentTime] = useState<string>(
    DateTime.now().toUTC().minus({ minute: 30 }).toSeconds().toString().split('.')[0],
  );
  const { data } = useQuery(GET_POOL_TIME_SWAPS, {
    variables: {
      poolId,
      timestamp: String(currentTime),
    },
    pollInterval: 10000,
  });
  const options = {
    borderColor: '#87DD95',
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: theme === 'light' ? COLOR_BLACK : COLOR_LIGHT_GRAY,
          font: {
            size: 10,
            weight: 500,
          },
          minRotation: 0,
          maxRotation: 0,
          maxTicksLimit: 10,
        },
        display: true,
      },
      y: {
        position: 'right',
        grid: {
          display: false,
        },
        ticks: {
          color: theme === 'light' ? COLOR_BLACK : COLOR_LIGHT_GRAY,
          font: {
            size: 10,
            weight: 500,
          },
          minRotation: 0,
          maxRotation: 0,
        },
        display: true,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      filler: {
        propagate: false,
      },
    },
  };

  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler);

  useEffect(() => {
    if (data !== undefined) {
      const chartValueData = [];
      const chartLabelData = [];

      data.pool.swaps.forEach((swap) => {
        const price = convertPrice(swap.sqrtPriceX96);
        if (data.pool.token0.id === baseToken) {
          chartValueData.push(price);
        }
        if (data.pool.token1.id === baseToken) {
          chartValueData.push(1 / price);
        }
        chartLabelData.push(
          DateTime.fromSeconds(parseInt(swap.timestamp, 10)).toUTC().toFormat('HH:mm'),
        );
      });
      chartValueData.reverse();
      chartLabelData.reverse();

      setChartValues(chartValueData);
      setChartLabels(chartLabelData);
    }
  }, [baseToken, data]);

  const chart = {
    labels: chartLabels,
    datasets: [
      {
        data: chartValues,
        fill: true,
        backgroundColor: (context) => {
          const { ctx } = context.chart;
          const gradient = ctx.createLinearGradient(0, 0, 0, 200);
          gradient.addColorStop(0, 'rgba(135, 221, 149, .4)');
          gradient.addColorStop(0.35, 'rgba(135, 221, 149, .2)');
          gradient.addColorStop(1, 'rgba(135, 221, 149, 0)');

          return gradient;
        },
        tension: 0.4,
        pointRadius: 3,
      },
    ],
  };

  return (
    <div className={ChartStyles.container}>
      <div className={ChartStyles.chart}>
        <Line options={options} data={chart} redraw />
      </div>
    </div>
  );
}

export default Chart;
