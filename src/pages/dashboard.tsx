/* eslint-disable react-hooks/exhaustive-deps */
import styled from "@emotion/styled";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import { CSSProperties, useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import Banner from "src/components/Banner";
import Layout from "src/components/common/Layout/Layout";
import { handleGetDodamUser } from "src/core/api/auth.api";
import { handleGetPost } from "src/core/api/post.api";
import PostList from "src/core/components/Post/List";
import { ErrorToast } from "src/core/lib/Toast";
import { Username } from "src/core/store";
import checkAuth from "src/core/utils/checkAuth";

const style: CSSProperties = {
  float: "right",
};

const Dashboard: NextPage = () => {
  const router: NextRouter = useRouter();
  const code: string | string[] | undefined = router.query.code;
  const [postDatas, setPostDatas] = useState<object[]>();
  const setUserName = useSetRecoilState(Username);

  const getAllPost = () => {
    handleGetPost(null)
      .then((res) => {
        setUserName(res.data.user_profile.user_name);
        if (res.data.list_count !== 0) {
          setPostDatas(res.data.contents);
        } else {
          setPostDatas(undefined);
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
        })
        .catch((err) => {
          ErrorToast(err.response.data.detail);
        });
    } else if (!code) {
      if (checkAuth() !== false) {
        getAllPost();
      }
    }
  }, [code]);

  return (
    <>
      <Head>
        <title>게시글 보기</title>
        <meta
          name="Devlopa Dashboard Page"
          content="This Page is Dashboard Page"
        />
      </Head>
      <Layout>
        <Banner />
        <Wrapper>
          <AddPost>
            <Link href="/apply">
              <a style={style}>게시글 작성하러 가기</a>
            </Link>
          </AddPost>
        </Wrapper>
        {postDatas !== undefined ? (
          <PostList
            postDatas={postDatas}
            getAllPost={getAllPost}
            getUserProfile={null}
          />
        ) : checkAuth() ? (
          <Nothing>게시글이 없습니다.</Nothing>
        ) : (
          <Nothing>로그인 후 사용가능합니다.</Nothing>
        )}
      </Layout>
    </>
  );
};

export default Dashboard;

const Wrapper = styled.div`
  width: 37%;
  margin: auto;
  margin-top: 1.563%;
  margin-bottom: 50px;
`;

const AddPost = styled.div`
  width: 100%;
  float: right;
  font-size: 18px;
  font-family: Pretendard;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.Blue600};

  a {
    ::after {
      content: "";
      width: 150px;
      height: 10px;
      background-color: ${({ theme }) => theme.colors.Blue700};
      position: absolute;
      margin-top: -6px;
      display: block;
      z-index: -1;
    }
  }
`;

const Nothing = styled.div`
  width: 30%;
  margin: auto;
  margin-top: 150px;
  text-align: center;
  font-family: Pretendard;
  font-weight: 600;
  font-size: 24px;
`;
