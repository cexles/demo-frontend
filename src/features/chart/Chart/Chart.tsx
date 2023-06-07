'use client';

import { useContext, useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { Line } from 'react-chartjs-2';
import { DateTime } from 'luxon';
import Decimal from 'decimal.js';
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
import { COLOR_BLACK, COLOR_LIGHT_GRAY } from '@/shared/lib/theme/colors';
import { GET_POOL_SWAPS } from '@/shared/lib/graphql/queries';

import ChartStyles from './Chart.module.scss';
import { Props } from './type';

function Chart({ baseToken, poolId }: Props) {
  const { theme } = useContext(ThemeContext);
  const [chartValues, setChartValues] = useState<number[]>([]);
  const [chartLabels, setChartLabels] = useState<number[]>([]);
  const { data } = useQuery(GET_POOL_SWAPS, {
    variables: {
      poolId,
      first: 10,
    },
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
        const price = new Decimal(swap.sqrtPriceX96)
          .dividedBy(new Decimal(2).pow(96))
          .pow(2)
          .toFixed(4)
          .toString();
        if (data.pool.token0.id === baseToken) {
          chartValueData.push(Number(price));
        }
        if (data.pool.token1.id === baseToken) {
          chartValueData.push(1 / Number(price));
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
        pointRadius: 0,
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
