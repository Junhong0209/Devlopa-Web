import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  height: 30px;
  box-shadow: 0px 4px 20px 0px ${({ theme }) => theme.colors.Black900};
  border-radius: 20px;
  justify-content: space-between;
`;

export const ImageWrapper = styled.div`
  margin-right: 15px;
`;

export const Input = styled.textarea`
  width: 90%;
  padding: 5px 0px 0px 15px;
  resize: none;
  ::placeholder {
    color: ${({ theme }) => theme.colors.Black700};
    vertical-align: middle;
    justify-content: center;
    align-items: center;
  }
`;
