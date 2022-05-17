import User from "./User";
import Image from "next/image";
import dynamic from "next/dynamic";
import Edit from "public/assets/post/Edit.svg";
import Delete from "public/assets/post/Delete.svg";
import CommentList from "../Comment/List";
import { NextRouter, useRouter } from "next/router";
import { deletePost } from "src/utils/deletePost";

import * as S from "src/components/Post/Item/index.style";

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
              alt="Edit Button Image"
              onClick={() => {
                router.push(`/modify/${data.idx}`);
              }}
            />
            <Image
              src={Delete}
              width="25"
              height="25"
              alt="Delete Button Image"
              onClick={() => {
                deletePost({
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
