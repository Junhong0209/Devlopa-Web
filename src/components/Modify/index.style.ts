import styled from "styled-components";

export const Container = styled.div`
  padding-top: 60px;
  width: 62.5%;
  height: 100%;
  margin: auto;
`;

export const Title = styled.div`
font-family: Pretendard;
font-weight: 600;
  margin-top: 80px;
  margin-bottom: 80px;
  font-size: 40px;
`;

export const Loading = styled.div`
  display: flex;
  height: 100%;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
  text-align: center;
  & > .loading {
    margin-right: 3rem;
  }
`;

export const LoadingText = styled.div`
  display: flex;
  font-size: 24px;
  text-align: center;
`;

export const Error = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  margin-top: -50px;
  font-size: 24px;
`;
