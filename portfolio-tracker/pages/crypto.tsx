import type { NextPage } from "next";
import Head from "next/head";
import NavBarComponent from "../components/molecules/navbar/navbar-component";

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
      <h1>crypto</h1>
    </div>
  );
};

export default Crypto;
