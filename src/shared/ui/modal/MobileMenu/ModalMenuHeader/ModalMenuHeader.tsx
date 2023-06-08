'use client';

import { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import ThemeContext from '@/appLayer/context/ThemeContext';
import ModalContext from '@/appLayer/context/ModalContext';

import ModalMenuHeaderStyles from './ModalMenuHeader.module.scss';

function ModalMenuHeader() {
  const { theme } = useContext(ThemeContext);
  const { handleModal } = useContext(ModalContext);

  return (
    <div className={ModalMenuHeaderStyles.header}>
      <button
        type="button"
        aria-label="Close menu"
        className={ModalMenuHeaderStyles.menuClose}
        onClick={() => handleModal()}
      />
      <div className={ModalMenuHeaderStyles.logoContainer}>
        <Image
          className={ModalMenuHeaderStyles.logo}
          src={theme === 'light' ? '/logo/logo-dark.svg' : '/logo/logo-light.svg'}
          width={128}
          height={21}
          alt="Logo"
        />
        <Link className={ModalMenuHeaderStyles.demo} href="/">
          Alpha version
        </Link>
      </div>
    </div>
  );
}

export default ModalMenuHeader;
