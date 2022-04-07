import Image from 'next/image';
import MainLogo from 'public/image/Main_Logo.svg';
import UserDefault from 'public/image/Default_User_Icon.svg';

import * as S from 'src/components/Header/index.style';

const Header = () => {
  return (
    <S.Container>
      <S.Layout>
        <S.Image>
          <Image src={MainLogo} width='185px' height='40px' alt='Main Logo'  />
        </S.Image>
        <S.User>
          <S.UserName>
            박준홍
          </S.UserName>
          <S.UserImage>
            <Image src={UserDefault} width='36px' height='36px' alt='Default Icon' />
          </S.UserImage>
        </S.User>
      </S.Layout>
    </S.Container>
  );
};

export default Header;