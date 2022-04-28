import type { NextPage } from "next";

import Header from "src/components/Header";
import ApplyComponent from "src/components/Apply/index";

const Apply: NextPage = () => {
  return (
    <>
      <Header />
      <ApplyComponent />
    </>
  );
};

export default Apply;
