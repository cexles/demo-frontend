'use client';

import ChangeOrderFormat from '@/features/theme/ChangeOrderFormat/ui/ChangeOrderFormat';
import ChangeOrderType from '@/features/order/ChangeOrderType/ui/ChangeOrderType';
import OrderTypeDescription from '@/entities/order/ui/OrderTypeDescription/OrderTypeDescription';

import LayoutOrderStyles from './LayoutOrder.module.scss';
import { Props } from './type';

function LayoutOrder({ type }: Props) {
  return (
    <section className={LayoutOrderStyles.order}>
      <div className={LayoutOrderStyles.orderSwitcher}>
        <div className={LayoutOrderStyles.wrapper}>
          <ChangeOrderType current={type} />
          <ChangeOrderFormat />
        </div>
        <OrderTypeDescription type={type} />
      </div>
    </section>
  );
}

export default LayoutOrder;
