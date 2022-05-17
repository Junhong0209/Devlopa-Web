/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import Send from "public/assets/post/Send.svg";
import useInput from "src/hooks/useTextarea";
import { handlePostComment } from "src/api/comment.api";
import { ErrorToast, SuccessToast } from "src/lib/Toast";

import * as S from "./index.style";

interface Props {
  idx: number;
  reloadComment: () => void;
}

const CommentInput = ({ idx, reloadComment }: Props): JSX.Element => {
  const [comment, onChangeComment, setComment] = useInput<string>("");

  const onSubmit = () => {
    if (comment !== "") {
      handlePostComment({ post_idx: idx, comment: comment })
        .then((res) => {
          reloadComment();
          SuccessToast(res.detail);
        })
        .catch((err) => {
          ErrorToast(err.response.data.detail);
        });
      setComment("");
    } else {
      ErrorToast("댓글이 작성되지 않았습니다.");
    }
  };

  return (
    <S.Container>
      <S.Input
        value={comment}
        onChange={onChangeComment}
        placeholder="댓글을 입력하세요."
      />
      <S.ImageWrapper
        onClick={() => {
          onSubmit();
        }}
      >
        <Image src={Send} width={30} height={30} id="image" alt="send Image" />
      </S.ImageWrapper>
    </S.Container>
  );
};

export default CommentInput;
