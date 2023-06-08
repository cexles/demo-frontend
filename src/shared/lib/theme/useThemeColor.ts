'use client';

import { useState, useEffect, useContext } from 'react';

import ThemeContext from '@/appLayer/context/ThemeContext';
import {
  COLOR_BLACK,
  COLOR_DARK_GRAY,
  COLOR_LIGHT_GRAY,
  COLOR_WHITE,
} from '@/shared/lib/theme/colors';

function useThemeColor() {
  const { theme } = useContext(ThemeContext);
  const [themeColors, setThemeColors] = useState<string[]>([COLOR_BLACK, COLOR_DARK_GRAY]);

  useEffect(() => {
    if (theme === 'light') {
      setThemeColors([COLOR_BLACK, COLOR_DARK_GRAY]);
    } else {
      setThemeColors([COLOR_WHITE, COLOR_LIGHT_GRAY]);
    }
  }, [theme]);

  return themeColors;
}

export default useThemeColor;
