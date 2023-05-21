'use client';

import { useEffect, useState } from 'react';
import OrderPageStyles from './OrderPage.module.scss';

function Order({ params }: { params: { slug: string } }) {
  const [orderType, setOrderType] = useState<string>(params.slug);

  useEffect(() => {
    if (orderType !== params.slug) {
      setOrderType(params.slug);
    }
  }, [orderType, params]);

  return (
    <div className={OrderPageStyles.content}>
      <main className={OrderPageStyles.main} />
    </div>
  );
}

export default Order;
