import Prism from "prismjs";
import "prismjs/themes/prism.css";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import colorSyntax from "@toast-ui/editor-plugin-code-syntax-highlight";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import { useRef } from "react";
import { SuccessAlert, ErrorAlert } from "src/core/lib/SweetAlert";
import { NextRouter, useRouter } from "next/router";
import { handleModifyPost, handlePostPosting } from "src/core/api/post.api";
import styled from "@emotion/styled";

interface Props {
  idx: string | string[] | undefined;
  initialValue: string | undefined;
  buttonText: string;
}

const MarkdownEditor = ({
  idx,
  initialValue,
  buttonText,
}: Props): JSX.Element => {
  const editorRef = useRef<any>();
  const router: NextRouter = useRouter();

  const onClick = (e: any) => {
    const content: string = editorRef.current.getInstance().getMarkdown();
    e.preventDefault();

    if (buttonText === "작성완료") {
      if (content !== "") {
        handlePostPosting({
          content: content,
        })
          .then((res) => {
            SuccessAlert({
              text: res.detail,
              router: router,
              url: "/dashboard",
            });
          })
          .catch((err) => {
            if (err.response.status === 400) {
              ErrorAlert({
                text: err.response.data.detail,
                router: null,
                url: null,
              });
            }
          });
      } else {
        ErrorAlert({
          text: "아무것도 입력하지 않았습니다.",
          router: null,
          url: null,
        });
      }
    } else if (buttonText === "수정완료") {
      if (initialValue !== content) {
        handleModifyPost({ post_idx: idx, content: content })
          .then((res) => {
            SuccessAlert({
              text: res.detail,
              router: router,
              url: "/dashboard",
            });
          })
          .catch((err) => {
            ErrorAlert({
              text: err.response.data.detail,
              router: null,
              url: null,
            });
          });
      } else {
        ErrorAlert({
          text: "기존의 글에서 수정된 것이 없습니다.",
          router: null,
          url: null,
        });
      }
    }
  };

  return (
    <>
      <Editor
        previewStyle="vertical"
        height="500px"
        initialEditType="markdown"
        initialValue={initialValue}
        useCommandShortcut={true}
        ref={editorRef}
        plugins={[[colorSyntax, { highlighter: Prism }]]}
      />
      <Button onClick={onClick} type="button">
        {buttonText}
      </Button>
    </>
  );
};

export default MarkdownEditor;

const Button = styled.button`
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
