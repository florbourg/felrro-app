import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { ThemeProvider } from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <GlobalStyle />
      <App code="MX/MR 2" />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
