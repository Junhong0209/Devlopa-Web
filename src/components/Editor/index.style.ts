import styled from "styled-components";

export const Button = styled.button`
  width: 14.334%;
  height: 5.3vh;
  background-color: ${({ theme }) => theme.colors.Main2};
  color: ${({ theme }) => theme.colors.White};
  border-radius: 8px;
  margin-left: 85.7%;
  margin-top: 1.667%;
  font-size: 1rem;

  cursor: pointer;
`;
