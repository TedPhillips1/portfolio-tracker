import type { NextPage } from "next";
import Head from "next/head";
import NavBarComponent from "../components/navbar/navbar-component";
import { useUser } from "@auth0/nextjs-auth0";
import LandingPageComponent from "../components/landing-page/landing-page-component";

const Home: NextPage = () => {
  const { user } = useUser();

  async function callAPI() {
    const response = await fetch("/api/comments");
    const data = await response.json();
    console.log(data.comment);
  }

  return (
    <div>
      <Head>
        <title>TGP Portfolios</title>
        <meta
          name="description"
          content="Portfolio Tracker App for stock and crypto portfolios"
        />
        <link rel="icon" href="/favicon.ico" />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Raleway:wght@100&display=swap');
        </style>
      </Head>
      <NavBarComponent />
      {!user && <LandingPageComponent />}
    </div>
  );
};

export default Home;
