import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import MainTemplates from "../components/MainTemplates";

const Home: NextPage = () => {
  const [page, setPage] = useState({
    key: 0,
    title: "home",
  });
  const handlePage = (key: number, title: string) => {
    setPage({ key: key, title: title });
  };
  return (
    <>
      <Head>
        <title>{page.title}</title>
        <meta name="description" content="front-end developer portpolio" />
      </Head>
      <MainTemplates page={page} handlePage={handlePage} />
    </>
  );
};

export default Home;
