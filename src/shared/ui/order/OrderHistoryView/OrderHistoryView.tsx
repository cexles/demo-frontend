'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ethers } from 'ethers';
import { formatEther } from '@ethersproject/units';
import { DateTime, Duration } from 'luxon';

import OrderHistoryViewStyles from './OrderHistoryView.module.scss';
import { Props } from './type';

function OrderHistoryView({ orderData }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [orderType, setOrderType] = useState<string>();
  const [orderStatus, setOrderStatus] = useState<string>('Active');

  useEffect(() => {
    switch (orderData.order.action) {
      case 0:
        setOrderType('Stop-loss');
        break;
      case 1:
        setOrderType('Take-Profit');
        break;
      case 2:
        setOrderType('DCA');
        break;
      case 3:
        setOrderType('Trailing profit');
        break;
      default:
        break;
    }
  }, [orderData.order.action]);

  useEffect(() => {
    if (orderData.status) {
      if (orderData.order.expiration * 1000 < DateTime.now().toUTC()) {
        setOrderStatus('Expired');
      }
      setOrderStatus('Active');
    } else {
      setOrderStatus('Closed');
    }
  }, [orderData.order.expiration, orderData.status]);

  const orderDescription = () => {
    if (orderData.order.action === 0 || orderData.order.action === 1) {
      return (
        <>
          <li>
            <h4>Base token amount</h4>
            <p>{(formatEther(orderData.order.baseAmount) / 1).toFixed(2)}</p>
          </li>

          <li>
            <h4>Bound order</h4>
            <p>{orderData.order.boundOrders.length !== 0 ? orderData.order.boundOrders : '-'}</p>
          </li>
          <li>
            <h4>Expiration</h4>
            <p>
              {DateTime.fromMillis(Number(orderData.order.expiration * 1000))
                .toUTC()
                .toFormat('yyyy-MM-dd HH:mm:ss')}
            </p>
          </li>
          <li>
            <h4>Target token amount</h4>
            <p>{(formatEther(orderData.order.aimTargetTokenAmount) / 1).toFixed(2)}</p>
          </li>
          <li>
            <h4>Target rate</h4>
            <p>
              {(
                formatEther(orderData.order.aimTargetTokenAmount) /
                formatEther(orderData.order.baseAmount)
              ).toFixed(2)}
            </p>
          </li>
        </>
      );
    }
    if (orderData.order.action === 2) {
      const data = ethers.utils.defaultAbiCoder.decode(
        ['uint128', 'uint128'],
        orderData.order.data,
      );
      const duration = Duration.fromObject({ seconds: data[0].toString() });

      return (
        <>
          <li>
            <h4>Order balance</h4>
            <p>{(formatEther(orderData.order.baseAmount) / 1).toFixed(2)}</p>
          </li>
          <li>
            <h4>Period</h4>
            <p>
              {duration.as('days') < 7
                ? `${duration.toFormat('d')} day`
                : `${duration.toFormat('M')} month`}
            </p>
          </li>
          <li>
            <h4>Last execution</h4>
            <p>
              {DateTime.fromMillis(Number(orderData.additionalInformation * 1000))
                .toUTC()
                .toFormat('yyyy-MM-dd HH:mm:ss')}
            </p>
          </li>
          <li>
            <h4>Target token balance</h4>
            <p>?</p>
          </li>
          <li>
            <h4>Buy amount</h4>
            <p>{(formatEther(data[1]) / 1).toFixed(2)}</p>
          </li>
        </>
      );
    }
    if (orderData.order.action === 3) {
      const data = ethers.utils.defaultAbiCoder.decode(
        ['uint128', 'uint128', 'uint24'],
        orderData.order.data,
      );

      return (
        <>
          <li>
            <h4>Order balance</h4>
            <p>{(formatEther(orderData.order.baseAmount) / 1).toFixed(2)}</p>
          </li>
          <li>
            <h4>Target rate</h4>
            {(formatEther(orderData.order.aimTargetTokenAmount) / 1).toFixed(2)}
          </li>
          <li>
            <h4>Sell at step</h4>
            {(formatEther(data[1]) / 1).toFixed(2)}
          </li>
          <li>
            <h4>Target token balance</h4>
            <p>?</p>
          </li>
          <li>
            <h4>Last sell rate</h4>
            <p>
              {(formatEther(orderData.additionalInformation) / 1).toFixed(2) !== '0.00'
                ? (formatEther(orderData.additionalInformation) / 1).toFixed(2)
                : '-'}
            </p>
          </li>
          <li>
            <h4>Trailing percent</h4>
            <p>{data[2] / 10000}%</p>
          </li>
        </>
      );
    }
    return '';
  };

  const handleOpenDescription = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
      <li
        className={`${OrderHistoryViewStyles.item} ${isOpen && OrderHistoryViewStyles.itemOpen}`}
        onClick={handleOpenDescription}
      >
        <div className={OrderHistoryViewStyles.order}>
          <p className={OrderHistoryViewStyles.time}>{orderData.id.toString()}</p>
          <div className={OrderHistoryViewStyles.type}>
            <ul className={OrderHistoryViewStyles.tokens}>
              <li>
                <Image alt="ETH" src="/icons/ETH.svg" width={23} height={23} />
              </li>
              <li>
                <Image alt="ETH" src="/icons/ETH.svg" width={23} height={23} />
              </li>
            </ul>
          </div>
          <p>{orderType}</p>
          <span
            className={`${OrderHistoryViewStyles.status} ${
              // eslint-disable-next-line no-nested-ternary
              orderStatus === 'Active'
                ? OrderHistoryViewStyles.statusActive
                : orderStatus === 'Closed'
                ? OrderHistoryViewStyles.statusDone
                : OrderHistoryViewStyles.statusCanceled
            }`}
          >
            {orderStatus}
          </span>
          <button
            type="button"
            aria-label="More details"
            className={`${OrderHistoryViewStyles.link} ${
              isOpen && OrderHistoryViewStyles.linkOpen
            }`}
          />
        </div>
        {isOpen && <ul className={OrderHistoryViewStyles.description}>{orderDescription()}</ul>}
      </li>
    </div>
  );
}

export default OrderHistoryView;
