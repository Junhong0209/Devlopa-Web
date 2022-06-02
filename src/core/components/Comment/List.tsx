/* eslint-disable react-hooks/exhaustive-deps */
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import CommentInput from "src/core/components/Comment/Input";
import CommentItem from "src/core/components/Comment/Item";
import { handleGetComment } from "src/core/api/comment.api";
import { ErrorToast } from "src/core/lib/Toast";

interface Props {
  idx: number;
  commentCount: number;
  comment: [];
}

const CommentList = ({ idx, comment, commentCount }: Props): JSX.Element => {
  const [isNotComment, setIsNotComment] = useState<boolean>(false);
  const [commentDatas, setCommentDatas] = useState<[]>(comment);

  const reloadComment = () => {
    handleGetComment({ post_idx: idx })
      .then((res) => {
        if (res.data.list_count === 0) {
          setIsNotComment(true);
        } else {
          setIsNotComment(false);
          setCommentDatas(res.data.contents);
        }
      })
      .catch((err) => {
        ErrorToast(err.response.data.detail);
      });
  };

  useEffect(() => {
    if (commentCount === 0) {
      setIsNotComment(true);
    }
  }, []);

  return (
    <Wrapper>
      {isNotComment ? (
        <NotComment>댓글이 없어요. :&#40;</NotComment>
      ) : (
        commentDatas.map((commentData: any) => {
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
    </Wrapper>
  );
};

export default CommentList;

const Wrapper = styled.div`
  margin: 20px 20px 0 20px;
  font-size: 13px;
  padding-top: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.Main2};
`;

const NotComment = styled.div`
  font-family: Pretendard;
  font-weight: 600;
  text-align: center;
  font-size: 14px;
  margin-bottom: 15px;
`;
