import Image from "next/image";
import MainLogo from "public/assets/Main_Logo.svg";

import * as S from "src/components/Main/Header/index.style";

const WelcomeHeader = (): JSX.Element => {
  return (
    <S.Container>
      <S.Layout>
        <S.Image>
          <Image src={MainLogo} width="185px" height="40px" alt="Main Logo" />
        </S.Image>
      </S.Layout>
    </S.Container>
  );
};

export default WelcomeHeader;
