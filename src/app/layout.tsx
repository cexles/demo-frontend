'use client';

import React from 'react';
import Providers from '@/appLayer/providers/Providers';
import '@/appLayer/index.scss';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
