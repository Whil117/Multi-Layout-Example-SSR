import type { AppPropsLayout } from "next/app";
import Layout from "../layout";
import "../styles/globals.css";
//import tailwind from 'tailwind-config/default'
//import { ThemeProvider } from '@emotion/core'

function MyApp({ Component, pageProps }: AppPropsLayout) {
  return (
    <Layout layout={Component?.layout} colors={Component.colors}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
