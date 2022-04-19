import PostItem from "../PostItem";

import * as S from "src/components/Dashboard/PostList/index.style";

const PostList = ({ postDatas }: any) => {
  return (
    <S.Container>
      {postDatas &&
        postDatas.map((postData: any) => {
          return <PostItem key={postData.idx} data={postData} />;
        })}
    </S.Container>
  );
};

export default PostList;
