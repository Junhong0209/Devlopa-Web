import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  border-radius: 12px;

  & > #image-group {
    float: right;
    margin-right: 3%;
    margin-top: -9.6%;
  }

  @media only screen and (min-width: 1920px) {
    & > #image-group {
      float: right;
      margin-right: 3%;
      margin-top: -7.5%;
      cursor: pointer;
    }
  }

  @media only screen and (min-width: 2560px) {
    & > #image-group {
      float: right;
      margin-right: 3%;
      margin-top: -5.5%;
      cursor: pointer;
    }
  }

  @media only screen and (min-width: 3440px) {
    & > #image-group {
      float: right;
      margin-right: 3%;
      margin-top: -4.5%;
      cursor: pointer;
    }
  }

  @media only screen and (min-width: 4096px) {
    & > #image-group {
      float: right;
      margin-right: 3%;
      margin-top: -3.5%;
      cursor: pointer;
    }
  }
`;
