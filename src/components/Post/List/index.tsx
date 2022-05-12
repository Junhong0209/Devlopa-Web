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
      {postDatas.length !== 0 ? (
        postDatas &&
        postDatas.map((postData: any) => {
          return (
            <PostItem
              key={postData.idx}
              data={postData}
              getAllPost={getAllPost}
              getUserProfile={getUserProfile}
            />
          );
        })
      ) : (
        <div id="nothing-posting">게시글이 없습니다.</div>
      )}
    </S.Container>
  );
};

export default PostList;
