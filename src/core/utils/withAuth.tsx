/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/display-name */
import { NextRouter, useRouter } from "next/router";
import { useEffect, useState } from "react";
import { handleTokenCheck } from "src/core/api/auth.api";
import { ErrorToast } from "src/core/lib/Toast";

const withAuth = (WrappedComponent: any) => {
  return (props: any) => {
    const router: NextRouter = useRouter();
    const [verified, setVerified] = useState<boolean>(false);

    useEffect(() => {
      const accessToken = sessionStorage.getItem("access_token");

      const tokenCheck = () => {
        handleTokenCheck()
          .then((res) => {
            setVerified(true);
          })
          .catch((err) => {
            if (err.response.status === 401) {
              sessionStorage.removeItem("access_token");
              ErrorToast("위조된 토큰입니다!");
              router.push("/");
            }
          });
      };

      if (!accessToken) {
        ErrorToast("로그인 후 사용 가능한 기능입니다!");
        router.push("/");
      } else {
        tokenCheck();
      }
    }, []);

    if (verified) {
      return <WrappedComponent {...props} />;
    } else {
      return null;
    }
  };
};

export default withAuth;
