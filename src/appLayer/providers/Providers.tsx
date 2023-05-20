'use client';

import React from 'react';
import { DAppProvider } from '@usedapp/core';

import ThemeProvider from '@/appLayer/providers/ThemeProvider';
import ModalProvider from '@/appLayer/providers/ModalProvider';
import config from '@/appLayer/config/useDApp';

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <DAppProvider config={config}>
      <ThemeProvider>
        <ModalProvider>{children}</ModalProvider>
      </ThemeProvider>
    </DAppProvider>
  );
}

export default Providers;
