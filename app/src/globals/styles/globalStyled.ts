import { createGlobalStyle, keyframes } from "styled-components"

const GlobalStyled = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    font-size: 62.5%;
    background-color: #4f05b5;
    font-family: 'Roboto', sans-serif;
  }
`;

export default GlobalStyled;