import reset from "styled-reset";
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${reset}

  // Fonts 추가

  html {
    height: 100%;
  }
  * {
    box-sizing: border-box;
  }
  body {
    font-family: -apple--apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: 0;
    overflow-x: auto;
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