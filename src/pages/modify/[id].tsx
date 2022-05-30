import styled from "@emotion/styled";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import { NextRouter, useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "src/components/common/Layout/Layout";
import { handleGetPost, handleModifyPost } from "src/core/api/post.api";
import withAuth from "src/core/utils/withAuth";
import ReactLoading from "react-loading";
import { ErrorAlert, SuccessAlert } from "src/core/lib/SweetAlert";
import Loader from "src/components/common/Loading";

const Editor = dynamic(
  () => import("src/core/components/Markdown/Editor/index"),
  { ssr: false }
);

const Modify: NextPage = () => {
  const [initialValue, setInitialValue] = useState<string>();
  const [loading, isLoading] = useState<boolean>(false);
  const [error, isError] = useState<boolean>(false);
  const router: NextRouter = useRouter();

  useEffect(() => {
    isLoading(true);
    handleGetPost({ post_idx: router.query["id"] })
      .then((res) => {
        setInitialValue(res.data.contents.content);
        isLoading(false);
      })
      .catch((err) => {
        isError(true);
      });
  }, [router]);

  const onClick = (content: string) => {
    if (initialValue !== content) {
      handleModifyPost({ post_idx: router.query["id"], content: content })
        .then((res) => {
          SuccessAlert({ text: res.detail, router: router, url: "/user" });
        })
        .catch((err) => {
          ErrorAlert({ text: err.response.data.detail });
        });
    } else {
      ErrorAlert({ text: "기존의 글에서 수정된 것이 없습니다." });
    }
  };

  return (
    <>
      <Head>
        <title>게시글 수정</title>
        <meta
          name="Devlopa Post Modify Page"
          content="This Page is Post Modify Page"
        />
      </Head>
      <Layout>
        <Container>
          {loading ? (
            error ? (
              <Error>게시글 정보를 가지고 오지 못했습니다.</Error>
            ) : (
              <Loading>
                <Loader text="게시글 정보 가져오는 중..." />
              </Loading>
            )
          ) : (
            <>
              <Title>게시글 수정</Title>
              <Editor
                previewStyle="vertical"
                height="500px"
                initialEditType="markdown"
                initialValue={initialValue}
                onClick={onClick}
              />
            </>
          )}
        </Container>
      </Layout>
    </>
  );
};

export default withAuth(Modify);

const Container = styled.div`
  padding-top: 60px;
  width: 62.5%;
  height: 100%;
  margin: auto;
`;

const Title = styled.div`
  font-family: Pretendard;
  font-weight: 600;
  margin-top: 80px;
  margin-bottom: 80px;
  font-size: 40px;
`;

const Loading = styled.div`
  display: flex;
  height: 100%;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
  text-align: center;
  & > .loading {
    margin-right: 3rem;
  }
`;

const LoadingText = styled.div`
  display: flex;
  font-size: 24px;
  text-align: center;
`;

const Error = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  margin-top: -50px;
  font-size: 24px;
`;
