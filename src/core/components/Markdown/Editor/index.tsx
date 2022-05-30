import Prism from "prismjs";
import "prismjs/themes/prism.css";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import colorSyntax from "@toast-ui/editor-plugin-code-syntax-highlight";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import { PreviewStyle, EditorType } from "@toast-ui/editor/types/editor";
import Button from "src/components/common/Button";
import { useRef } from "react";
import { Theme, useTheme } from "@emotion/react";

interface Props {
  previewStyle: PreviewStyle;
  height: string;
  initialEditType: EditorType;
  initialValue?: string;
  onClick: (content: string) => void;
}

const MarkdownEditor = ({
  previewStyle,
  height,
  initialEditType,
  initialValue,
  onClick,
}: Props): JSX.Element => {
  const editorRef = useRef<any>();
  const theme: Theme = useTheme();

  return (
    <>
      <Editor
        previewStyle={previewStyle}
        height={height}
        initialEditType={initialEditType}
        initialValue={initialValue}
        useCommandShortcut={true}
        ref={editorRef}
        plugins={[[colorSyntax, { highlighter: Prism }]]}
      />
      <Button
        width="14.334%"
        height="5.3vh"
        borderRadius="8px"
        float="right"
        marginTop="1.667%"
        fontSize="1rem"
        content="작성완료"
        backgroundColor={theme.colors.Main2}
        color={theme.colors.White}
        onClick={() => onClick(editorRef.current.getInstance().getMarkdown())}
      ></Button>
    </>
  );
};

export default MarkdownEditor;
