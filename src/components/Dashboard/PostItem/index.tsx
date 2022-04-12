import dynamic from 'next/dynamic';
import Image from 'next/image';
import * as S from 'src/components/Dashboard/PostItem/index.style';
import User from './User';
import Edit from 'public/image/Edit.svg';
import Delete from 'public/image/Delete.svg';

const Viewer = dynamic(
  () => import('src/components/Dashboard/PostViewer/index'),
  { ssr: false }
);

const PostItem = () => {
  const text: string = 'asdfasfas \n # hi \n * [x] asdf \n * [x] asdf \n * [x] asdf \n * [x] asdf \n * [x] asdf';

  return (
    <S.Container>
        <User username='박준홍' date='2022. 04. 07' />
        <S.ImageGroup>
          <Image src={Edit} width='25' height='25' alt='수정 이미지' />
          <Image src={Delete} width='25' height='25' alt='삭제 이미지' />
        </S.ImageGroup>
      <Viewer text={text} />
    </S.Container>
  );
};

export default PostItem;