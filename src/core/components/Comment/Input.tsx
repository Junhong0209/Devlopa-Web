import styled from "@emotion/styled";
import Image from "next/image";
import { handlePostComment } from "src/core/api/comment.api";
import useTextarea from "src/core/hooks/useTextarea";
import { ErrorToast, SuccessToast } from "src/core/lib/Toast";
import Send from "public/assets/post/Send.svg";

interface Props {
  idx: number;
  reloadComment: () => void;
}

const Input = ({ idx, reloadComment }: Props): JSX.Element => {
  const [comment, onChangeComment, setComment] = useTextarea<string>("");

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
    <Wrapper>
      <Textarea
        value={comment}
        onChange={onChangeComment}
        placeholder="댓글을 입력하세요."
      />
      <ImageWrapper
        onClick={() => {
          onSubmit();
        }}
      >
        <Image src={Send} width={30} height={30} id="image" alt="send Image" />
      </ImageWrapper>
    </Wrapper>
  );
};

export default Input;

const Wrapper = styled.div`
  display: flex;
  height: 30px;
  box-shadow: 0px 4px 20px 0px ${({ theme }) => theme.colors.Black900};
  border-radius: 20px;
  justify-content: space-between;
`;

const ImageWrapper = styled.div`
  margin-right: 15px;
`;

const Textarea = styled.textarea`
  width: 90%;
  padding: 5px 0px 0px 15px;
  resize: none;

  ::placeholder {
    color: ${({ theme }) => theme.colors.Black700};
    vertical-align: middle;
    justify-content: center;
    align-items: center;
  }
`;
