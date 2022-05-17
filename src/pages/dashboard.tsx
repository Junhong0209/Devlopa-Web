import type { NextPage } from "next";
import Head from "next/head";
import Banner from "src/components/Banner";
import Header from "src/components/Header";
import DashboardContainer from "src/components/Dashboard";

const Dashboard: NextPage = () => {
  return (
    <>
    <Head>
      <title>게시글 보기</title>
      <meta
        name="Devlopa Dashboard Page"
        content="This Page is Dashboard Page"
      />
    </Head>
      <Header />
      <Banner />
      <DashboardContainer />
    </>
  );
};

export default Dashboard;
