/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
import BannerImage from 'public/image/Banner.svg';

import * as S from 'src/components/Banner/index.style';

const Banner = () => {
  return (
    <S.Container>
      <Image src={BannerImage} width={6.4} height={1} layout='responsive' />
    </S.Container>
  );
};

export default Banner;