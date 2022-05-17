import type { NextPage } from "next";
import Head from "next/head";
import Main from "src/components/Main";
import Header from "src/components/Main/Header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Devlopa에 오신걸 환영합니다!</title>
        <meta
          name="Devlopa Welcome Page"
          content="This Page is Welcome Page"
        />
      </Head>
      <Header />
      <Main />
    </>
  );
};

export default Home;
