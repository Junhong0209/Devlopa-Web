import Prism from "prismjs";
import "prismjs/themes/prism.css";

import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";

import colorSyntax from "@toast-ui/editor-plugin-code-syntax-highlight";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";

import { useRef } from "react";
import { CustomAlert } from "src/lib/SweetAlert";
import { handelPostPosting } from "src/api/post.api";
import { NextRouter, useRouter } from "next/router";

import * as S from "src/components/Editor/index.style";

interface Props {
  initialValue: string;
  buttonText: string;
}

const MarkdownEditor = ({ initialValue, buttonText }: Props) => {
  const editorRef = useRef<any>();
  const router: NextRouter = useRouter();

  const onClick = (e: any) => {
    const content: string = editorRef.current.getInstance().getMarkdown();
    e.preventDefault();

    if (content !== "") {
      handelPostPosting({
        content: content,
      })
        .then((res) => {
          CustomAlert({
            icon: "success",
            title: "Success!",
            text: res.detail,
            router: router,
            url: "/dashboard",
          });
        })
        .catch((err) => {
          console.log(err.response.status);
          if (err.response.status === 400) {
            CustomAlert({
              icon: "error",
              title: "Error!",
              text: err.response.data.detail,
              router: null,
              url: null,
            });
          }
        });
    } else {
      CustomAlert({
        icon: "error",
        title: "Error!",
        text: "아무것도 입력하지 않았습니다.",
        router: null,
        url: null,
      });
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
      <S.Button onClick={onClick} type="button">
        {buttonText}
      </S.Button>
    </>
  );
};

export default MarkdownEditor;
