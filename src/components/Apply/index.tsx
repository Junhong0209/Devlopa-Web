import dynamic from 'next/dynamic';

import * as S from 'src/components/Apply/index.style';

const Editor = dynamic(
  () => import('src/components/Editor/index'),
  { ssr: false }
);

const Apply = () => {
  return (
    <S.Container>
      <S.Title>게시글 작성</S.Title>
      <Editor text='작성완료' />
    </S.Container>
  );
};

export default Apply;