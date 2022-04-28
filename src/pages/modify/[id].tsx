import type { NextPage } from "next";

import Header from "src/components/Header";
import ModifyContainer from "src/components/Modify";

const Modify: NextPage = () => {
  return (
    <>
      <Header />
      <ModifyContainer />
    </>
  );
};

export default Modify;
