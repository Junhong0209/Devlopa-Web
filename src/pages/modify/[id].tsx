import type { NextPage } from "next";
import Head from "next/head";
import Header from "src/components/Header";
import withAuth from "src/utils/withAuth";
import ModifyContainer from "src/components/Modify";

const Modify: NextPage = () => {
  return (
    <>
    <Head>
      <title>게시글 수정</title>
      <meta
        name="Devlopa Post Modify Page"
        content="This Page is Post Modify Page"
      />
    </Head>
      <Header />
      <ModifyContainer />
    </>
  );
};

export default withAuth(Modify);
