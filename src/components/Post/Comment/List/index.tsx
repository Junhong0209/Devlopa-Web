import CommentItem from "../Item";
import CommentInput from "../Input";
import { ErrorToast } from "src/lib/Toast";
import { useEffect, useState } from "react";
import { CommentDataType } from "src/type/comment.type";
import { handleGetComment } from "src/api/comment.api";

import * as S from "./index.style";

interface Props {
  idx: number;
}

const CommentList = ({ idx }: Props): JSX.Element => {
  const [isNotComment, setIsNotComment] = useState<boolean>(false);
  const [commentDatas, setCommentDatas] = useState<CommentDataType[]>([]);

  useEffect(() => {
    reloadComment();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const reloadComment = () => {
    setIsNotComment(false);
    handleGetComment({ post_idx: idx })
      .then((res) => {
        if (res.data.list_count === 0) {
          setIsNotComment(true);
        } else {
          setCommentDatas(res.data.contents);
        }
      })
      .catch((err) => {
        ErrorToast(err.response.data.detail);
      });
  };

  return (
    <S.Container>
      {isNotComment ? (
        <S.NotComment>댓글이 없어요. :(</S.NotComment>
      ) : (
        commentDatas.map((commentData) => {
          return (
            <CommentItem
              key={commentData.idx}
              data={commentData}
              reloadComment={reloadComment}
            />
          );
        })
      )}
      <CommentInput idx={idx} reloadComment={reloadComment} />
    </S.Container>
  );
};

export default CommentList;
