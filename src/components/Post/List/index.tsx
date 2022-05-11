import PostItem from "../Item";

import * as S from "src/components/Post/List/index.style";

const PostList = ({ postDatas }: any): JSX.Element => {
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
