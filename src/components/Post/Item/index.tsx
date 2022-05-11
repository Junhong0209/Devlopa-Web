import User from "./User";
import Swal from "sweetalert2";
import Image from "next/image";
import dynamic from "next/dynamic";
import Edit from "public/assets/post/Edit.svg";
import Delete from "public/assets/post/Delete.svg";
import CommentList from "../Comment/List";
import { CustomAlert } from "src/lib/SweetAlert";
import { ErrorToast, SuccessToast } from "src/lib/Toast";
import { handleDeletePost } from "src/api/post.api";
import { NextRouter, useRouter } from "next/router";

import * as S from "src/components/Post/Item/index.style";
import { useEffect } from "react";
import { useDeletePost } from "src/hooks/useDeletePost";

const Viewer = dynamic(() => import("src/components/Viewer/index"), {
  ssr: false,
});

interface Props {
  data: {
    idx: number;
    user_name: string;
    profile_image: string | null;
    grade: number;
    room: number;
    number: number;
    my_post: boolean;
    write_time: string;
    content: string;
  };
  getAllPost: () => void | null;
  getUserProfile: () => void | null;
}

const PostItem = ({ data, getAllPost, getUserProfile }: Props): JSX.Element => {
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
                // eslint-disable-next-line react-hooks/rules-of-hooks
                useDeletePost({
                  idx: data.idx,
                  getAllPost: getAllPost,
                  getUserProfile: getUserProfile,
                });
              }}
            />
          </div>
        )}
      </S.PostTitle>
      <Viewer text={data.content} />
      <CommentList idx={data.idx} />
    </S.Container>
  );
};

export default PostItem;
