import Link from "next/link";
import PostList from "src/components/Post/List/index";

import { Username } from "src/store";
import { handleGetPost } from "src/api/post.api";
import { useSetRecoilState } from "recoil";
import { handleGetDodamUser } from "src/api/auth.api";
import { NextRouter, useRouter } from "next/router";
import { CSSProperties, useEffect, useState } from "react";

import * as S from "src/components/Dashboard/index.style";
import { ErrorToast } from "src/lib/Toast";
import checkAuth from "src/utils/checkAuth";

const CSS: CSSProperties = {
  float: "right",
};

const Dashboard = (): JSX.Element => {
  const router: NextRouter = useRouter();
  const code: string | string[] | undefined = router.query.code;
  const [postDatas, setPostdatas] = useState<object[]>();
  const setUserName = useSetRecoilState(Username);

  const getAllPost = () => {
    handleGetPost(null)
      .then((res) => {
        setUserName(res.data.user_profile.user_name);
        if (res.data.list_count !== 0) {
          setPostdatas(res.data.contents);
        } else {
          setPostdatas(undefined);
        }
      })
      .catch((err) => {
        ErrorToast(err.response.data.detail);
      });
  };

  useEffect(() => {
    if (code) {
      handleGetDodamUser(code)
        .then((res) => {
          sessionStorage.setItem("access_token", res.data.token);
          router.push("/dashboard");
          if (checkAuth() !== false) {
            getAllPost();
          }
        })
        .catch((err) => {
          ErrorToast(err.response.data.detail);
        });
    } else if (!code) {
      if (checkAuth() !== false) {
        getAllPost();
      }
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
      {checkAuth() ? (
        postDatas !== undefined ? (
          <PostList
            postDatas={postDatas}
            getAllPost={getAllPost}
            getUserProfile={null}
          />
        ) : (
          <S.Nothing>게시글이 없습니다.</S.Nothing>
        )
      ) : (
        <S.Nothing>로그인을 먼저해주세요!</S.Nothing>
      )}
    </>
  );
};

export default Dashboard;
