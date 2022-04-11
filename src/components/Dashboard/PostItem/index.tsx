import dynamic from 'next/dynamic';
import * as S from 'src/components/Dashboard/PostItem/index.style';
import User from './User';

const Viewer = dynamic(
  () => import('src/components/Dashboard/PostViewer/index'),
  { ssr: false }
);

const PostItem = () => {
  const text: string = 'asdfasfas \n # hi \n * [x] asdf \n * [x] asdf \n * [x] asdf \n * [x] asdf \n * [x] asdf';

  return (
    <S.Container>
      <User username='박준홍' date='2022. 04. 07' />
      <Viewer text={text} />
    </S.Container>
  );
};

export default PostItem;