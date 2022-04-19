import type { NextPage } from "next";

import Header from "src/components/Header";
import UserDashboard from "src/components/UserDashboard";

const User: NextPage = () => {
  return (
    <>
      <Header />
      <UserDashboard />
    </>
  );
};

export default User;
