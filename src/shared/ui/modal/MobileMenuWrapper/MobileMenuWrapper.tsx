'use client';

import { useContext } from 'react';

import ModalContext from '@/appLayer/context/ModalContext';

import MobileMenuWrapperStyles from './MobileMenuWrapper.module.scss';
import { Props } from './type';

function MobileMenuWrapper({ children }: Props) {
  const { openModal, handleModal } = useContext(ModalContext);

  return openModal ? (
    <button
      type="button"
      aria-label="Close menu"
      className={MobileMenuWrapperStyles.buttonClose}
      onClick={() => handleModal()}
    />
  ) : (
    <button
      type="button"
      aria-label="Open menu"
      className={MobileMenuWrapperStyles.menu}
      onClick={() => handleModal(<div>{children}</div>)}
    />
  );
}

export default MobileMenuWrapper;
