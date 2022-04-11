import * as S from 'src/components/Dashboard/PostList/index.style';
import PostItem from '../PostItem';

const PostList = () => {
  return (
    <S.Container>
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
    </S.Container>
  );
};

export default PostList;