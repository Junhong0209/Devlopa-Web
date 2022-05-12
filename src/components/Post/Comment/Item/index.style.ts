import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  justify-content: space-between;
  top: -30px;
  left: 40px;
  min-width: 100px;
  width: fit-content;
  background-color: rgba(52, 53, 58, 0.2);
  color: #37393e;
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
  font-family: Pretendard700;
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
    background-color: #ffffff;

    & > div {
      text-align: center;
      padding: 5px;
      border-radius: 3px;

      &:hover {
        background-color: #c4c4c4;
        cursor: pointer;
      }
    }
  }
`;

export const Content = styled.div`
  font-size: 16px;
  font-family: Pretendard600;
  margin-top: 10px;
  padding: 0 10px 5px 10px;
`;
