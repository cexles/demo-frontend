'use client';

import React, { useEffect, useLayoutEffect, useState } from 'react';

import ThemeContext from '@/appLayer/context/ThemeContext';

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setTheme(localStorage.getItem('app-theme') || 'light');
    }
  }, []);

  const handleChangeTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      localStorage.setItem('app-theme', 'dark');
    } else {
      setTheme('light');
      localStorage.setItem('app-theme', 'light');
    }
  };

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ThemeContext.Provider value={{ theme, handleChangeTheme }}>{children}</ThemeContext.Provider>
  );
}

export default ThemeProvider;
