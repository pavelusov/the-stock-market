'use client';

import { FC, ReactNode } from 'react';
import { Inter } from 'next/font/google';

import './globals.css';
import StoreProvider from '@/redux/Provider';

const inter = Inter({ subsets: ['latin'] })

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {

  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  )
}

export default RootLayout;
