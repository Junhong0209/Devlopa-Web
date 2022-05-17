import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: auto;
  padding-top: 20px;
  margin-left: 1.2rem;
  margin-bottom: 1.2rem;
`;

export const ImageWrapper = styled.div`
  display: flex;
  box-sizing: content-box;
  cursor: pointer;
`;

export const Name = styled.span`
  display: flex;
  margin-left: 1rem;
  font-family: Pretendard700;
  font-size: 17px;
  color: ${({ theme }) => theme.colors.Black600};
  z-index: 1;
  cursor: pointer;
`;

export const Time = styled.span`
  display: flex;
  padding-top: 1.4rem;
  margin-left: -2.7rem;
  font-family: Pretendard500;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.Gray600};
`;
