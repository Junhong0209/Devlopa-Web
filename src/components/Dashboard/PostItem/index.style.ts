import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.1);
  padding-bottom: 50px;
  margin-bottom: 30px;
  border-radius: 12px;
`;

export const PostTitle = styled.div`
  display: flex;
  justify-content: space-between;

  & > #image-group {
    display: flex;
    padding-top: 1.2rem;
    height: 50px;
    margin-right: 1.2rem;
    cursor: pointer;
  }
`;
