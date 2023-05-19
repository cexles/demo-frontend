'use client';

import { useContext } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

import ThemeContext from '@/appLayer/context/ThemeContext';
import ChangeTheme from '@/features/theme/ChangeTheme/ui/ChangeTheme';
import Menu from '@/features/navigation/Menu/ui/Menu';
import useScreenWidth from '@/shared/lib/theme/useScreenWidth';

import LayoutHeaderStyles from './LayoutHeader.module.scss';

function LayoutHeader() {
  const { theme } = useContext(ThemeContext);
  const pathname = usePathname();
  const width = useScreenWidth();

  return (
    <header
      className={
        pathname === '/' && width > 1024
          ? LayoutHeaderStyles.headerMain
          : LayoutHeaderStyles.headerOrder
      }
    >
      <div className={LayoutHeaderStyles.headerWrapper}>
        <div className={LayoutHeaderStyles.logoWrapper}>
          <Image
            className={LayoutHeaderStyles.logo}
            src={theme === 'light' ? '/logo/logo-dark.svg' : '/logo/logo-light.svg'}
            width={128}
            height={21}
            alt="Logo"
          />
          <Link className={LayoutHeaderStyles.link} href="/">
            demo simulation
          </Link>
        </div>
        <Menu />
        <ChangeTheme />
      </div>
    </header>
  );
}

export default LayoutHeader;
