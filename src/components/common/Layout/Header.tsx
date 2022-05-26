import { Username } from "src/core/store";
import { NextRouter, useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import styled from "@emotion/styled";
import Image from "next/image";
import MainLogo from "public/assets/Main_Logo.svg";
import checkAuth from "src/core/utils/checkAuth";
import UserDefault from "public/assets/Default_User_Icon.svg";

const Header = (): JSX.Element => {
  const router: NextRouter = useRouter();
  const username = useRecoilValue(Username);

  return (
    <Container>
      <Layout>
        <HeaderImage>
          <Image
            src={MainLogo}
            width="185px"
            height="40px"
            alt="Main Logo"
            onClick={() => {
              router.push("/dashboard");
            }}
          />
        </HeaderImage>
        {checkAuth() ? (
          <User
            onClick={() => {
              router.push("/user");
            }}
          >
            <UserName>{username}</UserName>
            <UserImage>
              <Image
                src={UserDefault}
                width="36px"
                height="36px"
                alt="Default Icon"
              />
            </UserImage>
          </User>
        ) : (
          <User
            onClick={() => {
              router.push("/");
            }}
          >
            로그인
          </User>
        )}
      </Layout>
    </Container>
  );
};

export default Header;

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.Main1};
  border-bottom: 1px solid ${({ theme }) => theme.colors.Gray900};
  z-index: 1;
`;

export const Layout = styled.div`
  width: 1200px;
  margin: auto;
  color: ${({ theme }) => theme.colors.White};
  line-height: 60px;
`;

export const HeaderImage = styled.span`
  position: relative;
  top: 10px;
  cursor: pointer;
`;

export const User = styled.span`
  float: right;
  cursor: pointer;
`;

export const UserName = styled.span`
  margin-right: 15px;
`;

export const UserImage = styled.span`
  position: relative;
  top: 12px;
`;
