import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Viewer } from '@toast-ui/react-editor';

import 'prismjs/themes/prism.css';
import Prism from 'prismjs';

import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";

import * as S from 'src/components/Dashboard/PostViewer/index.style';


const MarkdownViewer = ( props: any ) => {
  const { text } = props;

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