import PostList from "src/components/Dashboard/PostList";
import Header from "src/components/Header";
import UserDashboard from "src/components/UserDashboard"

const User = () => {
  return (
    <>
      <Header />
      <UserDashboard />
      <PostList />
    </>
  );
};

export default User;