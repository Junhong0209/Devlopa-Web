import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import { Viewer } from "@toast-ui/react-editor";
import "prismjs/themes/prism.css";
import Prism from "prismjs";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import styled from "@emotion/styled";

const MarkdownViewer = ({ text }: { text: string }): JSX.Element => {
  return (
    <Container>
      <Viewer
        initialValue={text}
        plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
      />
    </Container>
  );
};

export default MarkdownViewer;

const Container = styled.div`
  padding: 0 20px;
  height: auto;
  margin: auto;
`;
