import styled from "@emotion/styled";
import { CSSProperties } from "react";

interface Props {
  value: string;
  width: string;
  height: string;
  borderRadius: string;
  float?: string;
  marginLeft?: string;
  marginTop: string;
  fontSize: string;
  onClick: (content?: string) => void;
}

const Button = ({
  value,
  width,
  height,
  borderRadius,
  float,
  marginLeft,
  marginTop,
  fontSize,
  onClick,
}: Props) => {
  const style: CSSProperties = {
    width,
    height,
    borderRadius,
    marginLeft,
    marginTop,
    fontSize,
  };
  return (
    <CustomButton float={float} style={style} onClick={() => onClick}>
      {value}
    </CustomButton>
  );
};

export default Button;

const CustomButton = styled.button<{ float?: string }>`
  text-align: center;
  float: ${(props) => props.float};
  background-color: ${({ theme }) => theme.colors.Main2};
  color: ${({ theme }) => theme.colors.White};
  cursor: pointer;
`;
