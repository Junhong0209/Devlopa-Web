import type { NextPage } from "next";
import Head from "next/head";
import Header from "src/components/Header";
import withAuth from "src/utils/withAuth";
import ApplyComponent from "src/components/Apply/index";

const Apply: NextPage = () => {
  return (
    <>
      <Head>
        <title>게시글 작성</title>
        <meta
          name="Devlopa Post Apply Page"
          content="This Page is Post Apply Page"
        />
      </Head>
      <Header />
      <ApplyComponent />
    </>
  );
};

export default withAuth(Apply);
