'use client';

import { useContext } from 'react';

import ModalContext from '@/appLayer/context/ModalContext';
import OrderHistoryView from '@/shared/ui/order/OrderHistoryView/OrderHistoryView';

import ModalOrderHistoryStyles from './ModalOrderHistory.module.scss';
import { Props } from './type';

function ModalOrderHistory({ orders }: Props) {
  const { handleModal } = useContext(ModalContext);

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div className={ModalOrderHistoryStyles.overlay} onClick={() => handleModal()} />
      <div className={ModalOrderHistoryStyles.container}>
        <div className={ModalOrderHistoryStyles.orders}>
          <section className={ModalOrderHistoryStyles.section}>
            <div
              className={`${ModalOrderHistoryStyles.header && ModalOrderHistoryStyles.headerMain}`}
            >
              <h2 className={ModalOrderHistoryStyles.title}>Order history</h2>
            </div>
            <div className={ModalOrderHistoryStyles.table}>
              <ul className={ModalOrderHistoryStyles.tableHeader}>
                <li key="orderId">Order ID</li>
                <li key="direction">Direction</li>
                <li key="type">Type</li>
                <li key="status">Status</li>
              </ul>
              <ul className={ModalOrderHistoryStyles.orderList}>
                {orders !== undefined
                  ? Object.keys(orders)
                      .reverse()
                      .map((key) => <OrderHistoryView key={key} orderData={orders[key]} />)
                  : ''}
              </ul>
            </div>
            <button
              type="button"
              aria-label="Close order history"
              className={ModalOrderHistoryStyles.button}
              onClick={() => handleModal()}
            >
              Close order history
            </button>
          </section>
        </div>
      </div>
    </>
  );
}

export default ModalOrderHistory;
