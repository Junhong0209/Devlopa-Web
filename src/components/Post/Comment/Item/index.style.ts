import styled from "styled-components";

export const Container = styled.div`
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

export const Image = styled.span`
  display: flex;
  justify-content: space-between;
  width: 25px;
  height: 25px;
  background-image: url("/assets/Default_User_Icon.svg");
  background-repeat: repeat;
  background-size: cover;
`;

export const Name = styled.span`
  font-size: 13px;
  font-family: Pretendard;
  font-weight: 700;
  padding-left: 10px;
`;

export const MenuImage = styled.span`
  float: right;
  margin-top: -3px;
  margin-right: 5px;
  width: 15px;
  height: 20px;
  background-image: url("/assets/post/Menu.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  &:hover {
    & > #dropdown-content {
      display: block;
    }
  }

  & > #dropdown-content {
    display: none;
    position: absolute;
    min-width: 40px;
    background-color: ${({ theme }) => theme.colors.White};

    & > div {
      text-align: center;
      padding: 5px;
      border-radius: 3px;

      &:hover {
        background-color: ${({ theme }) => theme.colors.Gray700};
        cursor: pointer;
      }
    }
  }
`;

export const Content = styled.div`
  font-size: 16px;
  font-family: Pretendard;
  font-weight: 600;
  margin-top: 10px;
  padding: 0 10px 5px 10px;
`;
