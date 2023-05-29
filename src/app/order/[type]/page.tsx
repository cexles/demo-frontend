'use client';

import { useEffect, useState } from 'react';

import LayoutOrder from '@/widgets/LayoutOrder/LayoutOrder';
import OrderHistory from '@/widgets/OrderHistory/OrderHistory';
import useScreenWidth from '@/shared/lib/theme/useScreenWidth';

import OrderPageStyles from './OrderPage.module.scss';

function Order({ params }: { params: { type: string } }) {
  const width = useScreenWidth();
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
        {width > 1024 ? <OrderHistory /> : ''}
      </main>
    </div>
  );
}

export default Order;
