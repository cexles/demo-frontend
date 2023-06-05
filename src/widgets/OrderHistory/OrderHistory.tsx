'use client';

import { useContext } from 'react';
import { useEthers } from '@usedapp/core';

import ModalContext from '@/appLayer/context/ModalContext';
import ModalOrderHistory from '@/entities/order/ui/ModalOrderHistory/ModalOrderHistory';
import useUserOrdersInfo from '@/entities/order/api/getUserOrdersInfo/useUserOrdersInfo';
import useCancelOrder from '@/entities/order/api/cancelOrder/useCancelOrder';
import OrderHistoryView from '@/shared/ui/order/OrderHistoryView/OrderHistoryView';

import OrderHistoryStyles from './OrderHistory.module.scss';

function OrderHistory() {
  const { account } = useEthers();
  const { openModal, handleModal } = useContext(ModalContext);
  const { send: cancelOrder } = useCancelOrder();
  const orderHistory = useUserOrdersInfo({ wallet: account });

  /**
   * Function to handle the cancel of an order.
   * Calls the cancelOrder function with the provided orderId.
   */
  const handleCancelOrder = async (orderId: string) => {
    await cancelOrder([orderId]);
  };

  return (
    <section className={OrderHistoryStyles.section}>
      <div className={`${OrderHistoryStyles.header} ${openModal && OrderHistoryStyles.headerMain}`}>
        <h2 className={OrderHistoryStyles.title}>Order history</h2>
      </div>
      <div className={OrderHistoryStyles.table}>
        <ul className={OrderHistoryStyles.tableHeader}>
          <li key="orderId">Order ID</li>
          <li key="direction">Direction</li>
          <li key="type">Type</li>
          <li key="status">Status</li>
        </ul>
        <ul className={OrderHistoryStyles.orderList}>
          {orderHistory !== null && orderHistory !== undefined
            ? Object.keys(orderHistory)
                .reverse()
                .slice(0, 5)
                .map((key) => (
                  <OrderHistoryView
                    key={key}
                    orderData={orderHistory[key]}
                    cancelOrder={handleCancelOrder}
                  />
                ))
            : ''}
        </ul>
      </div>
      {openModal ? (
        <button
          type="button"
          aria-label="Close order history"
          className={OrderHistoryStyles.button}
          onClick={() => handleModal()}
        >
          Close order history
        </button>
      ) : (
        <button
          type="button"
          aria-label="View all"
          className={OrderHistoryStyles.button}
          onClick={() => handleModal(<ModalOrderHistory orders={orderHistory} />)}
        >
          View all
        </button>
      )}
    </section>
  );
}

export default OrderHistory;
