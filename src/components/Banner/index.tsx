/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import BannerImage from "public/assets/Banner.svg";
import styled from "@emotion/styled";

const Banner = (): JSX.Element => {
  return (
    <Container>
      <Image src={BannerImage} width={6.4} height={1} layout="responsive" alt="Banner Image" />
    </Container>
  );
};

export default Banner;

export const Container = styled.div`
  padding-top: 60px;
  margin: auto;
  width: 100vw;
`;