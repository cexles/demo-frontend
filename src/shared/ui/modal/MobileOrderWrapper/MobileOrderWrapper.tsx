'use client';

import { useContext } from 'react';

import ModalContext from '@/appLayer/context/ModalContext';

import MobileOrderWrapperStyles from './MobileOrderWrapper.module.scss';
import { Props } from './type';

function MobileOrderWrapper({ children }: Props) {
  const { openModal, handleModal } = useContext(ModalContext);

  return !openModal ? (
    <button
      type="button"
      aria-label="Open orders info"
      className={MobileOrderWrapperStyles.info}
      onClick={() => handleModal(<div>{children}</div>)}
    />
  ) : (
    ''
  );
}

export default MobileOrderWrapper;
