import type { NextPage } from "next";
import Head from "next/head";
import Header from "src/components/common/Layout/WelcomeHeader";
import styled from "@emotion/styled";
import Button from "src/components/common/Button";
import { Theme, useTheme } from "@emotion/react";
import { NextRouter, useRouter } from "next/router";
import { useEffect, useState } from "react";
import { handleGetUrl } from "src/core/api/index.api";
import { ErrorToast } from "src/core/lib/Toast";
import image from "public/assets/Welcome_Page_Background.svg";
import Image from "next/image";

const Home: NextPage = () => {
  const theme: Theme = useTheme();
  const router: NextRouter = useRouter();
  const [DAuthURL, setDAuthURL] = useState<string>("");

  useEffect(() => {
    handleGetUrl()
      .then((res) => {
        setDAuthURL(res.data.DAuthURL);
      })
      .catch((err) => {
        ErrorToast(err.response.data.detail);
      });
  }, []);

  const onClick = () => {
    router.push(DAuthURL);
  };

  return (
    <>
      <Head>
        <title>Devlopa에 오신걸 환영합니다!</title>
        <meta name="Devlopa Welcome Page" content="This Page is Welcome Page" />
      </Head>
      <Header />
      <Container>
        <Layout>
          <Title>환영합니다. :&#41;</Title>
          <SubTitle>서비스를 이용하시려면 로그인을 먼저 해주세요</SubTitle>
          <Button
            content="로그인"
            width="300px"
            height="60px"
            marginTop="70px"
            borderRadius="12px"
            fontFamily="Pretendard"
            fontWeight="800"
            fontSize="20px"
            backgroundColor={theme.colors.Blue900}
            color={theme.colors.White}
            onClick={onClick}
          />
        </Layout>
        <BackgroundImage>
          <Image
            src={image}
            width="1000px"
            height="800px"
            alt="Background Image"
          />
        </BackgroundImage>
      </Container>
    </>
  );
};

export default Home;

const Container = styled.div`
  width: 1200px;
  height: 90vh;
  overflow: hidden;
  margin: auto;
`;

const Layout = styled.div`
  width: 1200px;
  height: 300px;
  margin-top: 300px;
`;

const Title = styled.div`
  width: 280px;
  font-family: Pretendard;
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.colors.Blue900};

  ::before {
    content: "";
    width: 270px;
    height: 17px;
    background-color: ${({ theme }) => theme.colors.Blue500};
    position: absolute;
    margin-top: 35px;
    display: block;
    z-index: -1;
  }
`;

const SubTitle = styled.div`
  margin-top: 13px;
  font-family: Pretendard;
  font-weight: 700;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.Blue900};
`;

const BackgroundImage = styled.span`
  position: relative;
  top: -600px;
  margin-left: 350px;
`;
