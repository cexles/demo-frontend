'use client';

import React from 'react';

import ThemeProvider from '@/appLayer/providers/ThemeProvider';

function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

export default Providers;
