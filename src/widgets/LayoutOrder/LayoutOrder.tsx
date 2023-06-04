'use client';

import { useAppSelector } from '@/appLayer/redux/hooks';
import ChangeOrderFormat from '@/features/theme/ChangeOrderFormat/ui/ChangeOrderFormat';
import ChangeOrderType from '@/features/order/ChangeOrderType/ui/ChangeOrderType';
import CreateOrderForm from '@/features/order/CreateOrderForm/ui/CreateOrderForm';
import CreateOrderChat from '@/features/order/CreateOrderChat/ui/CreateOrderChat';
import OrderTypeDescription from '@/entities/order/ui/OrderTypeDescription/OrderTypeDescription';

import LayoutOrderStyles from './LayoutOrder.module.scss';
import { Props } from './type';

function LayoutOrder({ type }: Props) {
  const orderFormat = useAppSelector((state) => state.theme.orderFormat);

  return (
    <section className={LayoutOrderStyles.order}>
      <div className={LayoutOrderStyles.orderSwitcher}>
        <div className={LayoutOrderStyles.wrapper}>
          <ChangeOrderType current={type} />
          <ChangeOrderFormat />
        </div>
        <OrderTypeDescription type={type} />
      </div>
      {orderFormat === 'chat' ? <CreateOrderChat type={type} /> : <CreateOrderForm type={type} />}
    </section>
  );
}

export default LayoutOrder;
