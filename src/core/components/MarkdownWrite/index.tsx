import styled from "@emotion/styled";
import dynamic from "next/dynamic";

const Editor = dynamic(
  () => import("src/core/components/Markdown/Editor/index"),
  { ssr: false }
);

interface Props {
  title: string;
  idx: string | string[] | undefined;
  initialValue: string | undefined;
  buttonText: string;
}

const MarkdownWrite = ({
  title,
  idx,
  initialValue,
  buttonText,
}: Props): JSX.Element => {
  return (
    <Container>
      <Title>{title}</Title>
      <Editor idx={idx} initialValue={initialValue} buttonText={buttonText} />
    </Container>
  );
};

export default MarkdownWrite;

const Container = styled.div`
  padding-top: 60px;
  width: 60vw;
  margin: auto;
`;

const Title = styled.div`
  font-family: Pretendard;
  font-weight: 600;
  font-size: 40px;
  margin: 60px 0;
`;
