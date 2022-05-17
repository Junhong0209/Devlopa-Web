import styled from "styled-components";

export const Container = styled.div`
  margin: 20px 20px 0 20px;
  font-size: 13px;
  padding-top: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.Main2};
`;

export const NotComment = styled.div`
  font-family: Pretendard600;
  text-align: center;
  font-size: 14px;
  margin-bottom: 15px;
`;
