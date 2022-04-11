import Link from 'next/link';
import { CSSProperties } from 'react';
import * as S from 'src/components/Dashboard/index.style';
import PostList from './PostList';

const CSS: CSSProperties = {
  float: 'right',
};

const Dashboard = () => {
  return (
    <>
      <S.Container>
        <S.AddPost>
          <Link href='/'>
            <a style={CSS}>
              게시글 작성하러 가기
            </a>
          </Link>
        </S.AddPost>
      </S.Container>
      <PostList />
    </>
  );
};

export default Dashboard;