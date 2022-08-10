import { createGlobalStyle, keyframes } from "styled-components"


const anime = keyframes`
  from {
    top: 0;
  }
  to{ 
    bottom: 100%;
  }
`

const GlobalStyled = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    font-size: 62.5%;
    background-color: #4f05b5;
    font-family: 'Roboto', sans-serif;
    overflow: hidden;
  }
`;

export default GlobalStyled;