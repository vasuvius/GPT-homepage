import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: #f4f4f9;
    color: #333;
    line-height: 1.6;
    scroll-behavior: smooth;
  }

  h1, h2 {
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
  }

  p {
    font-size: 1.2rem;
    color: #555;
  }
`;

export default GlobalStyle;
