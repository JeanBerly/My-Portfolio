import React from 'react';
import Header from '../components/Header';
import { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next'
import '../styles/GradientText.css';
import '../styles/index.css'; 
import '../i18n';

function MyApp({ Component, pageProps}: AppProps) {
  return (
    <>
    <Header></Header>
    <Component {...pageProps}/>
    </>
  );
}

export default appWithTranslation(MyApp);
