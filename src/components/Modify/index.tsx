import dynamic from "next/dynamic";
import { NextRouter, useRouter } from "next/router";
import { useEffect, useState } from "react";
import { handleGetPost } from "src/api/post.api";

import * as S from "src/components/Modify/index.style";

const Editor = dynamic(() => import("src/components/Editor/index"), {
  ssr: false,
});

const ModifyContainer = () => {
  const [initialValue, setInitialValue] = useState<string>();
  const router: NextRouter = useRouter();

  useEffect(() => {
    handleGetPost({ post_idx: router.query["id"] })
      .then((res) => {
        console.log(res.data.contents.content);
        setInitialValue(res.data.contents.content);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.Container>
      <S.Title>게시글 수정</S.Title>
      <Editor
        idx={router.query["id"]}
        initialValue={initialValue}
        buttonText="수정완료"
      />
    </S.Container>
  );
};

export default ModifyContainer;
