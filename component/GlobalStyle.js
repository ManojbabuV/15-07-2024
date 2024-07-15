
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Inter', sans-serif;
    background-color: #f4f6f8;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
