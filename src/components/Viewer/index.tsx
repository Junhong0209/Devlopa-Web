import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import { Viewer } from "@toast-ui/react-editor";

import "prismjs/themes/prism.css";
import Prism from "prismjs";

import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";

import * as S from "src/components/Viewer/index.style";

interface Props {
  text: string;
}

const MarkdownViewer = ({ text }: Props): JSX.Element => {
  return (
    <S.Container>
      <Viewer
        initialValue={text}
        plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
      />
    </S.Container>
  );
};

export default MarkdownViewer;
