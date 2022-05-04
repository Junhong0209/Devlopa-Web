import dynamic from "next/dynamic";
import Image from "next/image";

import User from "./User";
import Edit from "public/image/Edit.svg";
import Delete from "public/image/Delete.svg";

import { CustomAlert } from "src/lib/SweetAlert";
import { IPostingData } from "src/type/index.type";
import { handleDeletePost } from "src/api/post.api";
import { NextRouter, useRouter } from "next/router";

import * as S from "src/components/Dashboard/PostItem/index.style";

const Viewer = dynamic(
  () => import("src/components/Dashboard/PostViewer/index"),
  { ssr: false }
);

const PostItem = ({ data }: { data: IPostingData }): JSX.Element => {
  const router: NextRouter = useRouter();

  return (
    <S.Container>
      <S.PostTitle>
        <User username={data.user_name} date={data.write_time} />
        {data.my_post && (
          <div id="image-group">
            <Image
              src={Edit}
              width="25"
              height="25"
              alt="수정 이미지"
              onClick={() => {
                router.push(`/modify/${data.idx}`);
              }}
            />
            <Image
              src={Delete}
              width="25"
              height="25"
              alt="삭제 이미지"
              onClick={() => {
                handleDeletePost({ data: { post_idx: data.idx } })
                  .then((res) => {
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
                      text: "본인의 게시글이 아닙니다.",
                      router: null,
                      url: null,
                    });
                  });
              }}
            />
          </div>
        )}
      </S.PostTitle>
      <Viewer text={data.content} />
    </S.Container>
  );
};

export default PostItem;
