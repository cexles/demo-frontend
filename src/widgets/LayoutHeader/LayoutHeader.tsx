'use client';

import { useContext } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

import ThemeContext from '@/appLayer/context/ThemeContext';
import ConnectWallet from '@/features/web3/ConnectWallet/ui/ConnectWallet';
import ChangeTheme from '@/features/theme/ChangeTheme/ui/ChangeTheme';
import Menu from '@/features/navigation/Menu/ui/Menu';
import MobileMenu from '@/features/navigation/MobileMenu/ui/MobileMenu';
import useScreenWidth from '@/shared/lib/theme/useScreenWidth';
import MobileMenuWrapper from '@/shared/ui/modal/MobileMenuWrapper/MobileMenuWrapper';
import ChainSelect from '@/shared/ui/select/ChainSelect/ChainSelect';

import LayoutHeaderStyles from './LayoutHeader.module.scss';

function LayoutHeader() {
  const { theme } = useContext(ThemeContext);
  const pathname = usePathname();
  const width = useScreenWidth();

  return (
    <header
      className={pathname !== '/' ? LayoutHeaderStyles.headerOrder : LayoutHeaderStyles.headerMain}
    >
      <div className={LayoutHeaderStyles.headerWrapper}>
        <div className={LayoutHeaderStyles.logoWrapper}>
          {width <= 1200 && (
            <MobileMenuWrapper>
              <MobileMenu />
            </MobileMenuWrapper>
          )}
          <Image
            className={LayoutHeaderStyles.logo}
            src={theme === 'light' ? '/logo/logo-dark.svg' : '/logo/logo-light.svg'}
            width={128}
            height={21}
            alt="Logo"
          />
          <Link className={LayoutHeaderStyles.link} href="/">
            Alpha version
          </Link>
        </div>
        <Menu />
        <div className={LayoutHeaderStyles.buttons}>
          {width > 1024 && <ChangeTheme />}
          <ChainSelect />
          <ConnectWallet width={width} />
        </div>
      </div>
    </header>
  );
}

export default LayoutHeader;
