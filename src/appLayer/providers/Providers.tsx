'use client';

import React from 'react';
import { DAppProvider } from '@usedapp/core';

import ThemeProvider from '@/appLayer/providers/ThemeProvider';
import ModalProvider from '@/appLayer/providers/ModalProvider';
import ReduxProvider from '@/appLayer/providers/ReduxProvider';
import config from '@/appLayer/config/useDApp';

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <DAppProvider config={config}>
      <ReduxProvider>
        <ThemeProvider>
          <ModalProvider>{children}</ModalProvider>
        </ThemeProvider>
      </ReduxProvider>
    </DAppProvider>
  );
}

export default Providers;
