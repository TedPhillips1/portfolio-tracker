import type { NextPage } from "next";
import Head from "next/head";
import NavBarComponent from "../components/molecules/navbar/navbar-component";
import { useUser } from "@auth0/nextjs-auth0";
import LandingPageComponent from "../components/organisms/landing-page/landing-page-component";
import FooterComponent from "../components/molecules/footer/footer-component";
import HomePageComponent from "../components/organisms/home-page/home-page-component";

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
      {user && <HomePageComponent />}
      <FooterComponent />
    </div>
  );
};

export default Home;
