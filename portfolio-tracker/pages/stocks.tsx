import type { NextPage } from "next";
import Head from "next/head";
import FooterComponent from "../components/molecules/footer/footer-component";
import NavBarComponent from "../components/molecules/navbar/navbar-component";
import StockPageComponent from "../components/organisms/stock-page/stock-page-component";

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
      <StockPageComponent />
      <FooterComponent />
    </div>
  );
};

export default Stocks;
