/* eslint-disable react/display-name */
import { NextRouter, useRouter } from "next/router";
import { ErrorToast } from "src/lib/Toast";

const withAuth = (WrappedComponent: any) => {
  return (props: any) => {
    if (typeof window !== "undefined") {
      const router: NextRouter = useRouter();

      const access_token = sessionStorage.getItem("access_token");

      if (!access_token) {
        ErrorToast("로그인 후 사용 가능한 기능입니다!");
        router.push("/");
        return null;
      }

      return <WrappedComponent {...props} />;
    }

    return null;
  };
};

export default withAuth;
