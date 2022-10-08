import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">
      <Head>
        <title>Home-p-flix</title>
        <link rel="icon" href="/favicon" />
      </Head>

      <Header />
      <main>
        <section></section>
      </main>
    </div>
  );
};

export default Home;
