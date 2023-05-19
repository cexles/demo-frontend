'use client';

import { useContext, useEffect, useState } from 'react';
import Image from 'next/image';

import ThemeContext from '@/appLayer/context/ThemeContext';

import LayoutErrorWrapper from './ErrorWrapper.module.scss';
import { Props } from './type';

function ErrorWrapper({ error }: Props) {
  const { theme } = useContext(ThemeContext);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    switch (error) {
      case 404:
        setErrorMessage('Page not found');
        break;
      default:
        setErrorMessage('Unknown error');
        break;
    }
  }, [error]);

  return (
    <div className={LayoutErrorWrapper.wrapper}>
      <Image
        className={LayoutErrorWrapper.title}
        src={theme === 'light' ? '/errors/404-light.svg' : '/errors/404-dark.svg'}
        width={600}
        height={364}
        alt="Not found"
      />
      <p className={LayoutErrorWrapper.subtitle}>OPSSS... {errorMessage}</p>
      <a href="/" className={LayoutErrorWrapper.link}>
        Main page
      </a>
    </div>
  );
}

export default ErrorWrapper;
