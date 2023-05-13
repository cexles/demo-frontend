'use client';

import React, { useContext } from 'react';
import Image from 'next/image';

import ThemeContext from '@/appLayer/context/ThemeContext';

import ChangeThemeStyles from './ChangeTheme.module.scss';

function ChangeTheme() {
  const { theme, handleChangeTheme } = useContext(ThemeContext);

  return (
    <button type="button" className={ChangeThemeStyles.button} onClick={handleChangeTheme}>
      <Image
        src={theme === 'light' ? '/icons/MoonStars.svg' : '/icons/sun.svg'}
        alt="Switch theme"
        width={24}
        height={24}
      />
    </button>
  );
}

export default ChangeTheme;
