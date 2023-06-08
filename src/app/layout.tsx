'use client';

import React from 'react';
import { Analytics } from '@vercel/analytics/react';

import Providers from '@/appLayer/providers/Providers';
import LayoutHeader from '@/widgets/LayoutHeader/LayoutHeader';

import '@/appLayer/index.scss';
import styles from './styles.module.scss';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className={styles.page}>
            <div className={styles.container}>
              <LayoutHeader />
              {children}
            </div>
          </div>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
