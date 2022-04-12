import Prism from 'prismjs';
import 'prismjs/themes/prism.css';

import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import colorSyntax from '@toast-ui/editor-plugin-code-syntax-highlight';

import { useEffect, useRef, useState } from 'react';

import * as S from 'src/components/Editor/index.style';

const MarkdownEditor = ({ text }: { text: string }) => {
  const [markdownValue, setMarkdownValue] = useState<string>('');
  const editorRef = useRef<any>();

  useEffect(() => {
    // markdown 글을 작성 후 버튼 클릭으로 인해 useState의 값이 바뀌게 되면 서버로 값을 전송
  }, [markdownValue]);

  return (
    <>
      <Editor
        previewStyle='vertical'
        height='500px'
        initialEditType='markdown'
        initialValue={markdownValue}
        useCommandShortcut={true}
        ref={editorRef}
        plugins={[[colorSyntax, { highlighter: Prism }]]}
      />
      <S.Button 
        onClick={(e: any) => {
          e.preventDefault();
          setMarkdownValue(editorRef.current.getInstance().getMarkdown());
          console.log(editorRef.current.getInstance().getMarkdown());
        }}
        type='button'
      >
        {text}
      </S.Button>
    </>
  );
};

export default MarkdownEditor;