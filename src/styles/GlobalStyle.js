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
  p {
    font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  }

  li {
    font-weight: 300;
  font-size: 12px;
  line-height: 18px;
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

  /* TABLAS */

table.tableizer-table {
    font-size: 10px;
    font-family: Verdana, Geneva, sans-serif;
    border: 1px solid #CCC;
    width: 100%;
}

.tableizer-table td {
    padding: 3px;
    margin: -2px;
    text-align: center;
    border-top: 1px solid #CCC;
    border-left: 1px solid #CCC;
}

.tableizer-table th {
    padding: 4px 6px 4px 6px;
    background-color: #454545;
    color: #FFF;
    font-size: 12px;
    font-weight: 600;
    border-top: 1px solid #CCC;
    border-left: 1px solid #CCC;
    text-align: center;
}

.verde {
    background-color: #67A4C7;
    color: #FFF;
    font-weight: 600;
    font-size: 12px;
}

.bold {
    font-weight: 600;
}
`;

export default GlobalStyle;
