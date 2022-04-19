import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import { CSSProperties, useEffect } from "react";

import PostList from "./PostList";
import { handleGetDodamUser } from "src/lib/api/auth.api";

import * as S from "src/components/Dashboard/index.style";

const CSS: CSSProperties = {
  float: "right",
};

const Dashboard = () => {
  const router: NextRouter = useRouter();
  const code: string | string[] | undefined = router.query.code;

  useEffect(() => {
    if (code) {
      handleGetDodamUser(code)
        .then((res) => {
          sessionStorage.setItem("access_token", res.data.token);
          router.push("/dashboard");
        })
        .catch((err) => {
          console.log(err);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code]);

  return (
    <>
      <S.Container>
        <S.AddPost>
          <Link href="/apply">
            <a style={CSS}>게시글 작성하러 가기</a>
          </Link>
        </S.AddPost>
      </S.Container>
      <PostList />
    </>
  );
};

export default Dashboard;
