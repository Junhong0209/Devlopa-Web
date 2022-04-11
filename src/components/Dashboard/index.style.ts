import styled from "styled-components";

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
  font-family: Pretendard600;
  color: #606D92;

  a {
    ::after {
      content: '';
      width: 150px;
      height: 10px;
      background-color: rgba(96, 109, 146, 0.3);
      position: absolute;
      margin-top: -6px;
      display: block;
      z-index: -1;
    }
  }
`;