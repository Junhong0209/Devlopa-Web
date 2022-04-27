import dynamic from "next/dynamic";
import Image from "next/image";

import User from "./User";
import Edit from "public/image/Edit.svg";
import Delete from "public/image/Delete.svg";

import { CustomAlert } from "src/lib/SweetAlert";
import { IPostingData } from "src/type/index.type";
import { handelDeletePost } from "src/api/post.api";
import { NextRouter, useRouter } from "next/router";

import * as S from "src/components/Dashboard/PostItem/index.style";

const Viewer = dynamic(
  () => import("src/components/Dashboard/PostViewer/index"),
  { ssr: false }
);

const PostItem = ({ data }: { data: IPostingData }) => {
  const router: NextRouter = useRouter();

  return (
    <S.Container>
      <User username={data.user_name} date={data.write_time} />
      <div id="image-group">
        <Image
          src={Edit}
          width="25"
          height="25"
          alt="수정 이미지"
          onClick={() => {
            alert("수정 버튼 클릭!");
          }}
        />
        <Image
          src={Delete}
          width="25"
          height="25"
          alt="삭제 이미지"
          onClick={() => {
            handelDeletePost({ post_idx: data.idx })
              .then((res) => {
                console.log(res);
                CustomAlert({
                  icon: "success",
                  title: "Success!",
                  text: "게시글이 성공적으로 삭제되었습니다.",
                  router: router,
                  url: null,
                });
              })
              .catch((err) => {
                CustomAlert({
                  icon: "error",
                  title: "Error!",
                  text: "존재하지 않는 게시글이거나 본인의 게시글이 아닙니다.",
                  router: null,
                  url: null,
                });
              });
          }}
        />
      </div>
      <Viewer text={data.content} />
    </S.Container>
  );
};

export default PostItem;
