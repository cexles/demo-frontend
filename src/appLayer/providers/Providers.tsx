'use client';

import React from 'react';

import ThemeProvider from '@/appLayer/providers/ThemeProvider';
import ModalProvider from '@/appLayer/providers/ModalProvider';

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ModalProvider>{children}</ModalProvider>
    </ThemeProvider>
  );
}

export default Providers;
