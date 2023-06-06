'use client';

import { useContext } from 'react';

import ModalContext from '@/appLayer/context/ModalContext';
import OrderChart from '@/widgets/OrderChart/OrderChart';
import OrderHistory from '@/widgets/OrderHistory/OrderHistory';
import OrderModal from '@/shared/ui/modal/OrderModal/OrderModal';

import MobileOrderWrapperStyles from './MobileOrderWrapper.module.scss';

function MobileOrderWrapper() {
  const { openModal, handleModal } = useContext(ModalContext);

  return !openModal ? (
    <button
      type="button"
      aria-label="Open orders info"
      className={MobileOrderWrapperStyles.info}
      onClick={() =>
        handleModal(
          <OrderModal>
            <OrderChart />
            <OrderHistory />
          </OrderModal>,
        )
      }
    />
  ) : (
    ''
  );
}

export default MobileOrderWrapper;
