import { ErrorToast, SuccessToast } from "src/lib/Toast";
import { handleDeleteComment } from "src/api/comment.api";
import * as S from "./index.style";

interface Props {
  idx: number;
  user_name: string;
  my_comment: boolean;
  content: string;
}

const CommentItem = ({
  data,
  reloadComment,
}: {
  data: Props;
  reloadComment: () => void;
}): JSX.Element => {
  const { idx, user_name, my_comment, content } = data;

  const onClickDelete = () => {
    handleDeleteComment({ data: { comment_idx: idx } })
      .then((res) => {
        reloadComment();
        SuccessToast(res.detail);
      })
      .catch((err) => {
        ErrorToast(err.response.data.detail);
      });
  };
  console.log(my_comment);

  return (
    <>
      <S.Image />
      <S.Container>
        <S.Name>{user_name}</S.Name>
        {my_comment && (
          <S.MenuImage>
            <div id="dropdown-content">
              <div
                onClick={() => {
                  onClickDelete();
                }}
              >
                삭제
              </div>
            </div>
          </S.MenuImage>
        )}
        <S.Content>{content}</S.Content>
      </S.Container>
    </>
  );
};

export default CommentItem;
