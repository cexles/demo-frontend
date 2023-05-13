'use client';

import { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import ChangeTheme from '@/features/theme/ChangeTheme/ui/ChangeTheme';
import ThemeContext from '@/appLayer/context/ThemeContext';

import LayoutHeaderStyles from './LayoutHeader.module.scss';

function LayoutHeader() {
  const { theme } = useContext(ThemeContext);

  return (
    <header className={LayoutHeaderStyles.header}>
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
      <ChangeTheme />
    </header>
  );
}

export default LayoutHeader;
