'use client';

import React from 'react';

import ModalContext from '@/appLayer/context/ModalContext';
import useModal from '@/shared/lib/modal/useModal';
import Modal from '@/shared/ui/modal/Modal';

function ModalProvider({ children }: { children: React.ReactNode }) {
  const { openModal, handleModal, modalContent } = useModal();

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ModalContext.Provider value={{ openModal, handleModal, modalContent }}>
      <Modal />
      {children}
    </ModalContext.Provider>
  );
}

export default ModalProvider;
