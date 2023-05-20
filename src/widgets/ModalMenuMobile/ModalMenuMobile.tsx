import { useContext } from 'react';

import ModalContext from '@/appLayer/context/ModalContext';
import ModalMenuHeader from '@/features/modal/MobileMenu/ModalMenuHeader/ui/ModalMenuHeader';
import ModalMenuFooter from '@/features/modal/MobileMenu/ModalMenuFooter/ui/ModalMenuFooter';
import MobileMenu from '@/features/navigation/MobileMenu/ui/MobileMenu';

import ModalMenuMobileStyles from './ModalMenuMobile.module.scss';

function ModalMenuMobile() {
  const { openModal } = useContext(ModalContext);

  return (
    <div className={ModalMenuMobileStyles.modal}>
      <div className={ModalMenuMobileStyles.container}>
        <div
          className={`${ModalMenuMobileStyles.menu} ${openModal && ModalMenuMobileStyles.menuOpen}`}
        >
          <ModalMenuHeader />
          <div className={ModalMenuMobileStyles.content}>
            <div className={ModalMenuMobileStyles.main}>
              <MobileMenu />
            </div>
            <ModalMenuFooter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalMenuMobile;
