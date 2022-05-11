import PostItem from "../Item";

import * as S from "src/components/Post/List/index.style";

interface Props {
  postDatas: any;
  getAllPost: any | null;
  getUserProfile: any | null;
}

const PostList = ({
  postDatas,
  getAllPost,
  getUserProfile,
}: Props): JSX.Element => {
  return (
    <S.Container>
      {postDatas &&
        postDatas.map((postData: any) => {
          return (
            <PostItem
              key={postData.idx}
              data={postData}
              getAllPost={getAllPost}
              getUserProfile={getUserProfile}
            />
          );
        })}
    </S.Container>
  );
};

export default PostList;
