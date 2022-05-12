import type { NextPage } from "next";

import Header from "src/components/Header";
import UserDashboard from "src/components/UserDashboard";
import withAuth from "src/utils/withAuth";

const User: NextPage = () => {
  return (
    <>
      <Header />
      <UserDashboard />
    </>
  );
};

export default withAuth(User);
