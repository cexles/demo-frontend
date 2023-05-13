import React from 'react';
import ThemeContext from '@/appLayer/context/ThemeContext';
import useTheme from '@/shared/lib/theme/useTheme';

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
}

export default ThemeProvider;
