import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Navigation from "@/components/Navigation";
import Head from "next/head";
import React from "react";

const index = () => {
  return (
    <>
      <Head>
        <title>CompSys</title>
      </Head>

      <Hero />
      <Navigation />
    </>
  );
};

export default index;
