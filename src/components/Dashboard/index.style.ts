import styled from "@emotion/styled";

export const Container = styled.div`
  width: 36.459%;
  margin: auto;
  margin-top: 1.563%;
  margin-bottom: 50px;
`;

export const AddPost = styled.div`
  width: 100%;
  float: right;
  font-size: 18px;
  font-family: Pretendard;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.Blue600};

  a {
    ::after {
      content: "";
      width: 150px;
      height: 10px;
      background-color: ${({ theme }) => theme.colors.Blue700};
      position: absolute;
      margin-top: -6px;
      display: block;
      z-index: -1;
    }
  }
`;

export const Nothing = styled.div`
  width: 30%;
  margin: auto;
  margin-top: 150px;
  text-align: center;
  font-family: Pretendard;
  font-weight: 600;
  font-size: 24px;
`;
