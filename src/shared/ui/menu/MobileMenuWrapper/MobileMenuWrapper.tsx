'use client';

import { useContext } from 'react';

import ModalContext from '@/appLayer/context/ModalContext';
import MobileMenuModal from '@/features/modal/MobileMenu/ui/MobileMenuModal';

import MobileMenuWrapperStyles from './MobileMenuWrapper.module.scss';
import { Props } from './type';

function MobileMenuWrapper({ width }: Props) {
  const { openModal, handleModal } = useContext(ModalContext);

  if (width >= 1200) {
    return '';
  }

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
      onClick={() => handleModal(<MobileMenuModal />)}
    />
  );
}

export default MobileMenuWrapper;
