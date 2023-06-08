'use client';

import { useContext } from 'react';
import ModalContext from '@/appLayer/context/ModalContext';

import ModalWrapperStyles from './ModalWrapper.module.scss';
import { Props } from './type';

function ModalWrapper({ children }: Props) {
  const { openModal, handleModal } = useContext(ModalContext);

  if (openModal) {
    return (
      <div className={ModalWrapperStyles.modal}>
        <div className={ModalWrapperStyles.menu}>
          <div className={ModalWrapperStyles.container}>
            <div className={ModalWrapperStyles.header}>
              <button
                type="button"
                aria-label="Close order history"
                className={ModalWrapperStyles.buttonClose}
                onClick={() => handleModal()}
              />
            </div>
            <div className={ModalWrapperStyles.content}>{children}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalWrapper;
