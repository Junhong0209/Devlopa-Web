import styled from "@emotion/styled";
import { memo, useState } from "react";
import { handleDeleteComment } from "src/core/api/comment.api";
import { ErrorToast, SuccessToast } from "src/core/lib/Toast";

interface Props {
  data: {
    idx: number;
    user_name: string;
    my_comment: boolean;
    content: string;
  };
  reloadComment: () => void;
}

const CommentItem = ({ data, reloadComment }: Props) => {
  const { idx, user_name, my_comment, content } = data;
  const [openDropdown, isOpenDropdown] = useState<boolean>(false);

  const onClickDropdown = () => {
    isOpenDropdown(!openDropdown);
  };

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

  return (
    <>
      <UserIcon />
      <Wrapper>
        <Name>{user_name}</Name>
        {my_comment && (
          <MenuButtonWrapper>
            <MenuImage onClick={onClickDropdown} />
            {openDropdown && (
              <div id="dropdown-content">
                <ul>
                  <li onClick={onClickDelete}>삭제</li>
                </ul>
              </div>
            )}
          </MenuButtonWrapper>
        )}
        <Content>{content}</Content>
      </Wrapper>
    </>
  );
};

export default memo(CommentItem);

const Wrapper = styled.div`
  position: relative;
  justify-content: space-between;
  top: -30px;
  left: 40px;
  min-width: 100px;
  width: fit-content;
  background-color: ${({ theme }) => theme.colors.Black500};
  color: ${({ theme }) => theme.colors.Main2};
  border-radius: 7px;
  padding: 5px;
`;

const UserIcon = styled.span`
  display: flex;
  justify-content: space-between;
  width: 25px;
  height: 25px;
  background-image: url("/assets/Default_User_Icon.svg");
  background-repeat: repeat;
  background-size: cover;
`;

const Name = styled.span`
  font-size: 13px;
  font-family: Pretendard;
  font-weight: 700;
  padding-left: 10px;
`;

const MenuButtonWrapper = styled.div`
  & > #dropdown-content {
    position: absolute;
    top: 20px;
    left: 85%;
    width: 50px;
    height: 20px;
    float: right;
    border: 1px solid ${({ theme }) => theme.colors.Black900};
    border-radius: 6px;
    box-shadow: 0 16px 24px 2px ${({ theme }) => theme.colors.Black900};

    & > ul {
      list-style: none;
      padding: 0;
      margin: 0;

      & > li {
        padding-left: 8px 12px;
        text-align: center;
        line-height: 20px;
        z-index: 2;
        font-family: Pretendard;
        font-weight: 500;
        font-size: 16px;
        background-color: ${({ theme }) => theme.colors.White};
        border-radius: 6px;

        &:hover {
          background-color: ${({ theme }) => theme.colors.Gray600};
          cursor: pointer;
        }
      }
    }
  }
`;

const MenuImage = styled.button`
  float: right;
  margin-top: -17px;
  margin-right: 5px;
  padding: 0px;
  width: 15px;
  height: 20px;
  background-image: url("/assets/post/Menu.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const Content = styled.div`
  font-size: 16px;
  font-family: Pretendard;
  font-weight: 600;
  margin-top: 10px;
  padding: 0 10px 5px 10px;
`;
