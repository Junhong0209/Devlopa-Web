import { useRouter } from "next/router";
import { handleGetUrl } from "src/api/index.api";
import { useEffect, useState } from "react";
import type { NextRouter } from "next/router";

import Image from "next/image";
import BackgrountImage from "public/image/Welcome_Page_Background.svg";

import * as S from "src/components/Main/index.style";

const Main = (): JSX.Element => {
  const [DAuthURL, setDAuthURL] = useState<string>("");

  const router: NextRouter = useRouter();

  useEffect(() => {
    handleGetUrl()
      .then((res) => {
        setDAuthURL(res.data.DAuthURL);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <S.Container>
        <S.Layout>
          <S.Title>환영합니다. :&#41;</S.Title>
          <S.SubTitle>서비스를 이용하시려면 로그인을 먼저 해주세요.</S.SubTitle>
          <S.LoginButton
            onClick={() => {
              router.push(DAuthURL);
            }}
          >
            로그인
          </S.LoginButton>
        </S.Layout>
        <S.BackgroundImage>
          <Image
            src={BackgrountImage}
            width="1000px"
            height="800px"
            alt="Background Image"
          />
        </S.BackgroundImage>
      </S.Container>
    </>
  );
};

export default Main;
