'use client';

import React, { useContext } from 'react';

import ModalContext from '@/appLayer/context/ModalContext';
import MobileNavLink from '@/shared/ui/links/MobileNavLink/MobileNavLink';
import ModalMenuHeader from '@/shared/ui/modal/MobileMenu/ModalMenuHeader/ModalMenuHeader';
import ModalMenuFooter from '@/shared/ui/modal/MobileMenu/ModalMenuFooter/ModalMenuFooter';

import MobileMenuStyles from './MobileMenu.module.scss';

function MobileMenu() {
  const { openModal } = useContext(ModalContext);

  return (
    <div className={MobileMenuStyles.modal}>
      <div className={MobileMenuStyles.container}>
        <div className={`${MobileMenuStyles.menu} ${openModal && MobileMenuStyles.menuOpen}`}>
          <ModalMenuHeader />
          <div className={MobileMenuStyles.content}>
            <div className={MobileMenuStyles.main}>
              <nav className={MobileMenuStyles.nav}>
                <MobileNavLink href="/" exact>
                  Main
                </MobileNavLink>
                <MobileNavLink href="https://docs.cexles.finance/" target="_blank" exact>
                  Documentation
                </MobileNavLink>
              </nav>
            </div>
            <ModalMenuFooter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
