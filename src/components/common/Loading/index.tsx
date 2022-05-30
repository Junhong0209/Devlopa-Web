import { Theme, useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import Loading from "react-loading";

const Loader = ({ text }: { text: string }): JSX.Element => {
  const theme: Theme = useTheme();

  return (
    <Wrapper>
      <Loading
        type="spin"
        color={theme.colors.Main2}
        width="60px"
        height="60px"
        className="loading-bar"
      />
      {text}
    </Wrapper>
  );
};

export default Loader;

const Wrapper = styled.div`
  text-align: center;
  font-family: Pretendard;
  font-weight: 600;

  & > .loading-bar {
    margin: auto;
    margin-bottom: 30px;
  }
`;
