import type { NextPage } from "next";

import Main from "src/components/Main";
import Header from "src/components/Main/Header";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Main />
    </>
  );
};

export default Home;
