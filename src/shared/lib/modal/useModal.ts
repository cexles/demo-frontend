import React, { useState } from 'react';

export default () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);

  const handleModal = (content) => {
    setOpenModal(!openModal);
    if (content !== null) {
      setModalContent(content);
    }
  };

  return { openModal, handleModal, modalContent };
};
