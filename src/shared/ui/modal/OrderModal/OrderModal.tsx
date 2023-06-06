import { useContext } from 'react';

import ModalContext from '@/appLayer/context/ModalContext';

import OrderModalStyles from './OrderModal.module.scss';
import { Props } from './type';

function OrderModal({ children }: Props) {
  const { handleModal } = useContext(ModalContext);

  return (
    <div className={OrderModalStyles.modal}>
      <div className={OrderModalStyles.menu}>
        <div className={OrderModalStyles.container}>
          <div className={OrderModalStyles.header}>
            <button
              type="button"
              aria-label="Close order history"
              className={OrderModalStyles.buttonClose}
              onClick={() => handleModal()}
            />
          </div>
          <div className={OrderModalStyles.content}>{children}</div>
        </div>
      </div>
    </div>
  );
}

export default OrderModal;
