'use client';

import React, { useLayoutEffect, useState } from 'react';

import ThemeContext from '@/appLayer/context/ThemeContext';

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState(localStorage.getItem('app-theme') || 'light');

  const handleChangeTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('app-theme', theme);
  }, [theme]);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ThemeContext.Provider value={{ theme, handleChangeTheme }}>{children}</ThemeContext.Provider>
  );
}

export default ThemeProvider;
