'use client';

import { useEffect, useState } from 'react';

import LayoutOrder from '@/widgets/LayoutOrder/LayoutOrder';

import OrderPageStyles from './OrderPage.module.scss';

function Order({ params }: { params: { type: string } }) {
  const [orderType, setOrderType] = useState<string>(params.type);

  useEffect(() => {
    if (orderType !== params.type) {
      setOrderType(params.type);
    }
  }, [orderType, params]);

  return (
    <div className={OrderPageStyles.content}>
      <main className={OrderPageStyles.main}>
        <LayoutOrder type={orderType} />
      </main>
    </div>
  );
}

export default Order;
