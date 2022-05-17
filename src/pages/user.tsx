import type { NextPage } from "next";
import Head from "next/head";
import Header from "src/components/Header";
import UserDashboard from "src/components/UserDashboard";
import withAuth from "src/utils/withAuth";

const User: NextPage = () => {
  return (
    <>
      <Head>
        <title>유저 프로필</title>
        <meta
          name="Devlopa User Profile Page"
          content="This Page is User Profile Page"
        />
      </Head>
      <Header />
      <UserDashboard />
    </>
  );
};

export default withAuth(User);
