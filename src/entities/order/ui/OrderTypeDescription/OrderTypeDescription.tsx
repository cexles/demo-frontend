import { useEffect, useState } from 'react';

import orderTypes from '@/shared/config/order.config';

import OrderTypeDescriptionStyles from './OrderTypeDescription.module.scss';
import { Props } from './type';

function OrderTypeDescription({ type }: Props) {
  const [orderDescription, setOrderDescription] = useState<null | string>(null);

  useEffect(() => {
    setOrderDescription(orderTypes[type].description);
  }, [type]);

  return (
    <div className={OrderTypeDescriptionStyles.description}>
      <p>{orderDescription}</p>
    </div>
  );
}

export default OrderTypeDescription;
