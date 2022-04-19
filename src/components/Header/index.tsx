import { useRouter } from 'next/router';
import type { NextRouter } from 'next/router';

import Image from 'next/image';
import MainLogo from 'public/image/Main_Logo.svg';
import UserDefault from 'public/image/Default_User_Icon.svg';

import * as S from 'src/components/Header/index.style';

const Header = () => {
  const router: NextRouter = useRouter();

  return (
    <S.Container>
      <S.Layout>
        <S.Image>
          <Image src={MainLogo} width='185px' height='40px' alt='Main Logo' onClick={() => router.push('/dashboard')} />
        </S.Image>
        <S.User onClick={() => router.push('/user')}>
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