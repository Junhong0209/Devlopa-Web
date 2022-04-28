import Link from "next/link";
import PostList from "./PostList";

import { Username } from "src/store";
import { handleGetPost } from "src/api/post.api";
import { useSetRecoilState } from "recoil";
import { handleGetDodamUser } from "src/api/auth.api";
import { NextRouter, useRouter } from "next/router";
import { CSSProperties, useEffect, useState } from "react";

import * as S from "src/components/Dashboard/index.style";

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
          handleGetPost(null)
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
      handleGetPost(null)
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
