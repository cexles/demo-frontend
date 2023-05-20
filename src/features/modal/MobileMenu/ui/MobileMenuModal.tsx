import { useContext } from 'react';

import ModalContext from '@/appLayer/context/ModalContext';
import ModalMenuHeader from '@/widgets/ModalMenuHeader/ModalMenuHeader';
import ModalMenuFooter from '@/widgets/ModalMenuFooter/ModalMenuFooter';
import MobileMenu from '@/features/navigation/MobileMenu/ui/MobileMenu';

import MobileMenuModalStyles from './MobileMenuModal.module.scss';

function MobileMenuModal() {
  const { openModal } = useContext(ModalContext);

  return (
    <div className={MobileMenuModalStyles.modal}>
      <div className={MobileMenuModalStyles.container}>
        <div
          className={`${MobileMenuModalStyles.menu} ${openModal && MobileMenuModalStyles.menuOpen}`}
        >
          <ModalMenuHeader />
          <div className={MobileMenuModalStyles.content}>
            <div className={MobileMenuModalStyles.main}>
              <MobileMenu />
            </div>
            <ModalMenuFooter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileMenuModal;
