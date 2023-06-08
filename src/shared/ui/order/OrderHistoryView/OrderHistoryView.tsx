'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ethers } from 'ethers';
import { formatEther } from '@ethersproject/units';
import { DateTime, Duration } from 'luxon';

import { tokenHelper } from '@/shared/config/token.config';

import OrderHistoryViewStyles from './OrderHistoryView.module.scss';
import { Props } from './type';

function OrderHistoryView({ orderData, cancelOrder }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [orderType, setOrderType] = useState<string>();
  const [orderStatus, setOrderStatus] = useState<string>('Active');

  const handleCancelOrder = () => {
    cancelOrder(orderData.id);
  };

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
      if (orderData.order.action === 2) {
        setOrderStatus('Active');
      } else if (orderData.order.expiration * 1000 < DateTime.now().toUTC()) {
        setOrderStatus('Expired');
      } else {
        setOrderStatus('Active');
      }
    } else {
      setOrderStatus('Closed');
    }
  }, [orderData]);

  const orderDescription = () => {
    if (orderData.order.action === 0 || orderData.order.action === 1) {
      return (
        <>
          <ul className={OrderHistoryViewStyles.description}>
            <li>
              <h4>Base token amount</h4>
              <p>{Number(formatEther(orderData.order.baseAmount)).toFixed(2)}</p>
            </li>
            <li>
              <h4>Trigger rate</h4>
              <p>
                {(
                  formatEther(orderData.order.aimTargetTokenAmount) /
                  formatEther(orderData.order.baseAmount)
                ).toFixed(4)}
              </p>
            </li>
            <li>
              <h4>Bound order</h4>
              <p>
                {orderData.order.boundOrder.toString() !== '0'
                  ? orderData.order.boundOrder.toString()
                  : '-'}
              </p>
            </li>
            <li>
              <h4>Target token amount</h4>
              <p>{Number(formatEther(orderData.order.aimTargetTokenAmount)).toFixed(4)}</p>
            </li>
            <li>
              <h4>Execution amount</h4>
              <p>
                {Number(formatEther(orderData.resultTokenOut)).toFixed(2) !== '0.00'
                  ? Number(formatEther(orderData.resultTokenOut)).toFixed(4)
                  : '-'}
              </p>
            </li>
            <li>
              <h4>Expiration</h4>
              <p>
                {DateTime.fromMillis(Number(orderData.order.expiration * 1000))
                  .toUTC()
                  .toFormat('yyyy-MM-dd HH:mm:ss')}
              </p>
            </li>
          </ul>
          {orderStatus === 'Active' ? (
            <div className={OrderHistoryViewStyles.buttons}>
              <button
                type="button"
                className={`${OrderHistoryViewStyles.button} ${OrderHistoryViewStyles.buttonCancel}`}
                onClick={handleCancelOrder}
              >
                <p>Cancel order</p>
              </button>
            </div>
          ) : (
            ''
          )}
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
          <ul className={OrderHistoryViewStyles.description}>
            <li>
              <h4>Order balance</h4>
              <p>{Number(formatEther(orderData.order.baseAmount)).toFixed(4)}</p>
            </li>
            <li>
              <h4>Period</h4>
              <p>
                {duration.as('days') < 31
                  ? `${duration.toFormat('d')} days`
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
              <p>{Number(formatEther(orderData.resultTokenOut)).toFixed(4)}</p>
            </li>
            <li>
              <h4>Buy amount</h4>
              <p>{Number(formatEther(data[1])).toFixed(4)}</p>
            </li>
          </ul>
          {orderStatus === 'Active' ? (
            <div className={OrderHistoryViewStyles.buttons}>
              <button
                type="button"
                className={`${OrderHistoryViewStyles.button} ${OrderHistoryViewStyles.buttonCancel}`}
                onClick={handleCancelOrder}
              >
                <p>Cancel order</p>
              </button>
            </div>
          ) : (
            ''
          )}
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
          <ul className={OrderHistoryViewStyles.description}>
            <li>
              <h4>Order balance</h4>
              <p>{Number(formatEther(orderData.order.baseAmount)).toFixed(4)}</p>
            </li>
            <li>
              <h4>Target rate</h4>
              {(
                Number(formatEther(orderData.order.aimTargetTokenAmount)) /
                Number(formatEther(data[0]))
              ).toFixed(4)}
            </li>
            <li>
              <h4>Sell at step</h4>
              {Number(formatEther(data[1])).toFixed(4)}
            </li>
            <li>
              <h4>Target token balance</h4>
              <p>{Number(formatEther(orderData.resultTokenOut)).toFixed(4)}</p>
            </li>
            <li>
              <h4>Last sell rate</h4>
              <p>
                {Number(formatEther(orderData.additionalInformation)).toFixed(2) !== '0.00'
                  ? (
                      Number(formatEther(orderData.additionalInformation)) /
                      Number(formatEther(data[0]))
                    ).toFixed(4)
                  : '-'}
              </p>
            </li>
            <li>
              <h4>Trailing percent</h4>
              <p>{data[2] / 10000}%</p>
            </li>
          </ul>
          {orderStatus === 'Active' ? (
            <div className={OrderHistoryViewStyles.buttons}>
              <button
                type="button"
                className={`${OrderHistoryViewStyles.button} ${OrderHistoryViewStyles.buttonCancel}`}
                onClick={handleCancelOrder}
              >
                <p>Cancel order</p>
              </button>
            </div>
          ) : (
            ''
          )}
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
      <li className={`${OrderHistoryViewStyles.item} ${isOpen && OrderHistoryViewStyles.itemOpen}`}>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <div className={OrderHistoryViewStyles.order} onClick={handleOpenDescription}>
          <p className={OrderHistoryViewStyles.time}>{orderData.id.toString()}</p>
          <div className={OrderHistoryViewStyles.type}>
            <ul className={OrderHistoryViewStyles.tokens}>
              <li>
                <Image
                  alt={tokenHelper[orderData.order.baseToken.toLowerCase()].name}
                  src={tokenHelper[orderData.order.baseToken.toLowerCase()].icon}
                  width={23}
                  height={23}
                />
              </li>
              <li>
                <Image
                  alt={tokenHelper[orderData.order.targetToken.toLowerCase()].name}
                  src={tokenHelper[orderData.order.targetToken.toLowerCase()].icon}
                  width={23}
                  height={23}
                />
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
        {isOpen && orderDescription()}
      </li>
    </div>
  );
}

export default OrderHistoryView;
