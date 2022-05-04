import type { NextPage } from "next";
import Head from "next/head";
import NavBarComponent from "../components/molecules/navbar/navbar-component";
import CryptoPageComponent from "../components/organisms/crypto-page/crypto-page-component";
import FooterComponent from "../components/molecules/footer/footer-component";

const Crypto: NextPage = () => {
  return (
    <div>
      <Head>
        <title>TGP Portfolios</title>
        <meta
          name="description"
          content="Portfolio Tracker App for stock and crypto portfolios"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBarComponent />
      <CryptoPageComponent />
      <FooterComponent />
    </div>
  );
};

export default Crypto;
