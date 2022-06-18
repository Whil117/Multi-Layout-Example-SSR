import type { AppProps } from "next/app";
import "../styles/globals.css";
//import tailwind from 'tailwind-config/default'
//import { ThemeProvider } from '@emotion/core'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
