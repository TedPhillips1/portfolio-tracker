import type { AppProps } from "next/app";
import "../styles/styles.css";
import { UserProvider } from "@auth0/nextjs-auth0";
import { ThemeProvider } from "styled-components";
import {theme} from '../public/themes'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme} >
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
    </ThemeProvider>
  );
}

export default MyApp;
