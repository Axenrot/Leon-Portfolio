import type { NextPage } from "next";
import Head from "next/head";
import Background from "../components/Background";
import Navigation from "../components/Navigation";

const Home: NextPage = () => {
  return (
    <Background>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container border">
        <Navigation />
      </div>
    </Background>
  );
};

export default Home;
