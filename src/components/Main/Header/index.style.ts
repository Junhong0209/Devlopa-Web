import styled from "@emotion/styled";

export const Container = styled.div`
  height: 60px;
  border-bottom: 2px solid ${({theme}) => theme.colors.Blue400};
`;

export const Layout = styled.div`
  width: 1200px;
  margin: auto;
  line-height: 60px;
`;

export const Image = styled.div`
  position: absolute;
  top: 10px;
`;