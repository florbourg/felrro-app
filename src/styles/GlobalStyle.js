import { createGlobalStyle } from "styled-components";

import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

  ${normalize}


  html {
    font-size: 16px;
  }

  body {
    margin: 0;
    font-family: ${(props) => props.theme.fonts.primary.regular};
    height: 100%;
    background-color: ${(props) => props.theme.colors.background} !important;
  }

  /* reset button styles */
  button, input[type="submit"], input[type="reset"] {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }

  button:focus {
    outline: none;
  }
`;

export default GlobalStyle;
