import type { NextPage } from "next";

import Banner from "src/components/Banner";
import Header from "src/components/Header";
import DashboardContainer from 'src/components/Dashboard';

const Dashboard: NextPage = () => {
  return (
    <>
      <Header />
      <Banner />
      <DashboardContainer />
    </>
  );
};

export default Dashboard;