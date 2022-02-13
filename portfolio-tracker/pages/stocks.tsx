import type { NextPage } from "next";
import Head from "next/head";
import NavBarComponent from "../components/navbar/navbar-component";

const Stocks: NextPage = () => {
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
      <h1>Stocks</h1>
    </div>
  );
};

export default Stocks;
