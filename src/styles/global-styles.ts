import reset from "styled-reset";
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${reset}

  // Fonts 추가
  @font-face {
    font-family: Pretendard400;
    src: url('/font/Pretendard-Regular.woff2');
  }
  @font-face {
    font-family: Pretendard600;
    src: url('/font/Pretendard-SemiBold.woff2');
  }
  @font-face {
    font-family: Pretendard700;
    src: url('/font/Pretendard-Bold.woff2');
  }
  @font-face {
    font-family: Pretendard800;
    src: url('/font/Pretendard-ExtraBold.woff2');
  }

  html {
    height: 100%;
  }
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    overflow: hidden;
    min-height: 100vh;
  }
  a {
    color: inherit;
    padding: 0;
    text-decoration: none;
  }
  input, button, textarea {
    background-color: transparent;
    border: none;
    outline: none;
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-family: -apple-system, sans-serif;
  }
  ul, li {
    list-style: none;
  }

  #__next {
    height: 100%;
  }

  @media only screen and (max-width: 768px) {
    body {
      font-size: 12px;
    }
  }

  @media only screen and (max-width: 576px) {
    body {
      font-size: 10px
    }
  }
`;

export default GlobalStyle;