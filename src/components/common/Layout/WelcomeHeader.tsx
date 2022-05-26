import Image from "next/image";
import MainLogo from "public/assets/Main_Logo.svg";
import styled from "@emotion/styled";

const WelcomeHeader = (): JSX.Element => {
  return (
    <Container>
      <Layout>
        <Logo>
          <Image src={MainLogo} width="185px" height="40px" alt="Main Logo" />
        </Logo>
      </Layout>
    </Container>
  );
};

export default WelcomeHeader;

export const Container = styled.div`
  height: 60px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.Blue400};
`;

export const Layout = styled.div`
  width: 1200px;
  margin: auto;
  line-height: 60px;
`;

export const Logo = styled.div`
  position: absolute;
  top: 10px;
`;
