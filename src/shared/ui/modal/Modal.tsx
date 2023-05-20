import { createPortal } from 'react-dom';
import { useContext } from 'react';

import ModalContext from '@/appLayer/context/ModalContext';

function Modal() {
  const { openModal, modalContent } = useContext(ModalContext);

  if (openModal) {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return createPortal(<>{modalContent}</>, document.body);
  }
  return null;
}

export default Modal;
