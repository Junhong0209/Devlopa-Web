import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 60px;
  background-color: #101217;
  border-bottom: 1px solid #4d4d4d;
  z-index: 1;
`;

export const Layout = styled.div`
  width: 1200px;
  margin: auto;
  color: #ffffff;
  line-height: 60px;
`;

export const Image = styled.span`
  position: relative;
  top: 10px;
  cursor: pointer;
`;

export const User = styled.span`
  float: right;
  cursor: pointer;
`;

export const UserName = styled.span`
  margin-right: 15px;
`;

export const UserImage = styled.span`
  position: relative;
  top: 12px;
`;
