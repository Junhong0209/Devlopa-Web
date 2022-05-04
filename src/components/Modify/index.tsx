import dynamic from "next/dynamic";
import ReactLoading from "react-loading";
import { NextRouter, useRouter } from "next/router";
import { useEffect, useState } from "react";
import { handleGetPost } from "src/api/post.api";

import * as S from "src/components/Modify/index.style";

const Editor = dynamic(() => import("src/components/Editor/index"), {
  ssr: false,
});

const ModifyContainer = (): JSX.Element => {
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

  return (
    <S.Container>
      {loading ? (
        error ? (
          <S.Error>게시글 정보를 가지고 오지 못했습니다.</S.Error>
        ) : (
          <S.Loading>
            <ReactLoading type="spin" color="#36383C" className="loading" />
            <S.LoadingText>게시글 정보 가져오는 중...</S.LoadingText>
          </S.Loading>
        )
      ) : (
        <>
          <S.Title>게시글 수정</S.Title>
          <Editor
            idx={router.query["id"]}
            initialValue={initialValue}
            buttonText="수정완료"
          />
        </>
      )}
    </S.Container>
  );
};

export default ModifyContainer;
