import Header from '@components/Header';
import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';
import '@styles/globals.css';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <Script />
      <Script id="google-analytics" strategy="afterInteractive"></Script>
      <Header />
      <Component {...pageProps} />;
    </AppContext.Provider>
  );
}

export default MyApp;
