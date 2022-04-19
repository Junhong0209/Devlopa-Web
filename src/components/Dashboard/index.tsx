import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import { CSSProperties, useEffect, useState } from "react";

import PostList from "./PostList";
import { handelGetPost } from "src/lib/api/post.api";
import { handleGetDodamUser } from "src/lib/api/auth.api";

import * as S from "src/components/Dashboard/index.style";
import { useSetRecoilState } from "recoil";
import { Username } from "src/store";

const CSS: CSSProperties = {
  float: "right",
};

const Dashboard = () => {
  const router: NextRouter = useRouter();
  const code: string | string[] | undefined = router.query.code;
  const [postDatas, setPostdatas] = useState<object[]>();
  const setUserName = useSetRecoilState(Username);

  useEffect(() => {
    if (code) {
      handleGetDodamUser(code)
        .then((res) => {
          sessionStorage.setItem("access_token", res.data.token);
          router.push("/dashboard");
          handelGetPost()
            .then((res) => {
              setUserName(res.data.user_profile.user_name);
              setPostdatas(res.data.contents);
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (!code) {
      handelGetPost()
        .then((res) => {
          setUserName(res.data.user_profile.user_name);
          setPostdatas(res.data.contents);
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
      {postDatas ? (
        <PostList postDatas={postDatas} />
      ) : (
        <S.Nothing>게시글이 없습니다.</S.Nothing>
      )}
    </>
  );
};

export default Dashboard;
