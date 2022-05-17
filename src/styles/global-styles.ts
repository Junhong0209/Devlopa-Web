import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset};
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
    font-family: Pretendard700;
  }
  body {
    margin: 0;
    overflow: auto;
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
  ul, li {
    list-style: none;
  }
  p, h1, h2, h3, h4, h5, h6, span {
    font-family: Pretendard600;
  }

  #__next {
    height: 100vh;
  }
`;

export default GlobalStyle;
