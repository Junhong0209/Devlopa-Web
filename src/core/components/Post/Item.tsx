import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import Image from "next/image";
import { NextRouter, useRouter } from "next/router";
import Edit from "public/assets/post/Edit.svg";
import Delete from "public/assets/post/Delete.svg";
import { deletePost } from "src/core/utils/deletePost";
import CommentList from "../Comment/List";
import User from "./User";
import { memo } from "react";

const Viewer = dynamic(
  () => import("src/core/components/Markdown/Viewer/index"),
  { ssr: false }
);

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
    comment: [];
    comment_count: number;
  };
  getAllPost: () => void | null;
  getUserProfile: () => void | null;
}

const PostItem = ({ data, getAllPost, getUserProfile }: Props): JSX.Element => {
  const router: NextRouter = useRouter();

  return (
    <Wrapper>
      <Title>
        <User key={data.idx} username={data.user_name} date={data.write_time} />
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
      </Title>
      <Viewer text={data.content} />
      <CommentList idx={data.idx} comment={data.comment} commentCount={data.comment_count} />
    </Wrapper>
  );
};

export default memo(PostItem);

const Wrapper = styled.div`
  width: 100%;
  box-shadow: 0px 4px 20px 0px ${({ theme }) => theme.colors.Black900};
  padding-bottom: 30px;
  margin-bottom: 30px;
  border-radius: 12px;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;

  & > #image-group {
    display: flex;
    padding-top: 1.2rem;
    height: 50px;
    margin-right: 1.2rem;
    cursor: pointer;
  }
`;
