'use client';

import ChangeOrderFormat from '@/features/theme/ChangeOrderFormat/ui/ChangeOrderFormat';

import LayoutOrderStyles from './LayoutOrder.module.scss';

function LayoutOrder() {
  return (
    <section className={LayoutOrderStyles.order}>
      <div className={LayoutOrderStyles.orderSwitcher}>
        <div className={LayoutOrderStyles.wrapper}>
          <ChangeOrderFormat />
        </div>
      </div>
    </section>
  );
}

export default LayoutOrder;
