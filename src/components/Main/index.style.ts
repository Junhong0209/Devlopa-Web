import styled from "styled-components";

export const Container = styled.div`
  width: 1200px;
  height: 90vh;
  overflow: hidden;
  margin: auto;
`;

export const Layout = styled.div`
  width: 1200px;
  height: 300px;
  margin-top: 300px;
`;

export const Title = styled.div`
  width: 280px;
  font-family: Pretendard700;
  font-size: 50px;
  color: #2D67FF;

  ::before {
    content: '';
    width: 270px;
    height: 17px;
    background-color: #CCDAFF;
    position: absolute;
    margin-top: 35px;
    display: block;
    z-index: -1;
  }
`;

export const SubTitle = styled.div`
  margin-top: 13px;
  font-family: Pretendard700;
  font-size: 20px;
  color: #606AB5;
`;

export const LoginButton = styled.button`
  width: 300px;
  height: 60px;
  margin-top: 70px;
  border-radius: 12px;
  font-family: Pretendard800;
  font-size: 20px;
  background-color: #2D68FF;
  color: #FFFFFF;
`;

export const BackgroundImage = styled.span`
  position: relative;
  top: -600px;
  margin-left: 350px;
`;