import Image from "next/image";
import BackgrountImage from 'public/image/Welcome_Page_Background.svg';
import { useEffect, useState } from "react";

import * as S from "src/components/Main/index.style";

const Main = () => {
  const [DAuthURL, setDAuthURL] = useState<string>('');

  useEffect(() => {
    
  })

  return (
    <>
      <S.Container>
        <S.Layout>
          <S.Title>환영합니다. :&#41;</S.Title>
          <S.SubTitle>서비스를 이용하시려면 로그인을 먼저 해주세요.</S.SubTitle>
          <S.LoginButton>로그인</S.LoginButton>
        </S.Layout>
        <S.BackgroundImage>
          <Image src={BackgrountImage} width='1000px' height='800px' alt='Background Image' />
        </S.BackgroundImage>
      </S.Container>
    </>
  );
};

export default Main;