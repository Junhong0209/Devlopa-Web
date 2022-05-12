import { Username } from "src/store";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import type { NextRouter } from "next/router";

import Image from "next/image";
import MainLogo from "public/assets/Main_Logo.svg";
import checkAuth from "src/utils/checkAuth";
import UserDefault from "public/assets/Default_User_Icon.svg";

import * as S from "src/components/Header/index.style";

const Header = (): JSX.Element => {
  const router: NextRouter = useRouter();
  const username = useRecoilValue(Username);

  return (
    <S.Container>
      <S.Layout>
        <S.Image>
          <Image
            src={MainLogo}
            width="185px"
            height="40px"
            alt="Main Logo"
            onClick={() => {
              router.push("/dashboard");
            }}
          />
        </S.Image>
        {checkAuth() ? (
          <S.User
            onClick={() => {
              router.push("/user");
            }}
          >
            <S.UserName>{username}</S.UserName>
            <S.UserImage>
              <Image
                src={UserDefault}
                width="36px"
                height="36px"
                alt="Default Icon"
              />
            </S.UserImage>
          </S.User>
        ) : (
          <S.User
            onClick={() => {
              router.push("/");
            }}
          >
            로그인
          </S.User>
        )}
      </S.Layout>
    </S.Container>
  );
};

export default Header;
