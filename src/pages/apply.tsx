import type { NextPage } from "next";
import Head from "next/head";
import withAuth from "src/core/utils/withAuth";
import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import React, { ChangeEvent, useRef } from "react";
import { handlePostPosting } from "src/core/api/post.api";
import { ErrorAlert, SuccessAlert } from "src/core/lib/SweetAlert";
import { NextRouter, useRouter } from "next/router";
import Layout from "src/components/common/Layout/Layout";

const Editor = dynamic(
  () => import("src/core/components/Markdown/Editor/index"),
  { ssr: false }
);

const Apply: NextPage = () => {
  const router: NextRouter = useRouter();

  const onClick = (content: string) => {
    if (content !== "") {
      handlePostPosting({
        content: content,
      })
        .then((res) => {
          SuccessAlert({
            text: res.detail,
            router: router,
            url: "/dashboard",
          });
        })
        .catch((err) => {
          if (err.response.status === 400) {
            ErrorAlert({ text: err.response.data.detail });
          }
        });
    } else {
      ErrorAlert({ text: "아무것도 입력하지 않았습니다." });
    }
  };

  return (
    <>
      <Head>
        <title>게시글 작성</title>
        <meta
          name="Devlopa Post Apply Page"
          content="This Page is Post Apply Page"
        />
      </Head>
      <Layout>
        <Container>
          <Title>게시글 작성</Title>
          <Editor
            previewStyle="vertical"
            height="500px"
            initialEditType="markdown"
            onClick={onClick}
          />
        </Container>
      </Layout>
    </>
  );
};

export default withAuth(Apply);

const Container = styled.div`
  padding-top: 60px;
  width: 60vw;
  margin: auto;
`;

const Title = styled.div`
  font-family: Pretendard;
  font-weight: 600;
  font-size: 40px;
  margin: 60px 0;
`;
