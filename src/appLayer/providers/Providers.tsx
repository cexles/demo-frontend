'use client';

import React from 'react';
import { DAppProvider } from '@usedapp/core';
import { ApolloProvider } from '@apollo/client';

import ThemeProvider from '@/appLayer/providers/ThemeProvider';
import ModalProvider from '@/appLayer/providers/ModalProvider';
import ReduxProvider from '@/appLayer/providers/ReduxProvider';
import config from '@/appLayer/config/useDApp';
import client from '@/appLayer/config/apolloClient';

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <DAppProvider config={config}>
      <ApolloProvider client={client}>
        <ReduxProvider>
          <ThemeProvider>
            <ModalProvider>{children}</ModalProvider>
          </ThemeProvider>
        </ReduxProvider>
      </ApolloProvider>
    </DAppProvider>
  );
}

export default Providers;
