import styled from "@emotion/styled";
import { CSSProperties } from "react";

interface Props {
  content?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  float?: string;
  marginLeft?: string;
  marginTop?: string;
  fontFamily?: string;
  fontWeight?: string;
  fontSize?: string;
  backgroundColor?: string;
  color?: string;
  onClick: () => void;
}

const Button = ({
  content,
  width,
  height,
  borderRadius,
  float,
  marginLeft,
  marginTop,
  fontSize,
  backgroundColor,
  color,
  onClick,
}: Props) => {
  const style: CSSProperties = {
    width,
    height,
    borderRadius,
    marginLeft,
    marginTop,
    fontSize,
    backgroundColor,
    color,
  };
  return (
    <CustomButton float={float} style={style} onClick={() => onClick()}>
      {content}
    </CustomButton>
  );
};

export default Button;

const CustomButton = styled.button<{ float?: string }>`
  text-align: center;
  float: ${(props) => props.float};
  cursor: pointer;
`;
