import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";

import HomePage from "./pages/HomePage";
import Empresa from "./pages/Empresa";
import Productos from "./pages/Productos";
import Calidad from "./pages/Calidad";
import Contacto from "./pages/Contacto";

import Footer from "./components/Footer";

function App() {
  return (
    <Wrapper>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/index.html" component={HomePage} />
          <Route exact path="/empresa" component={Empresa} />
          <Route exact path="/empresa.html" component={Empresa} />
          <Route exact path="/productos" component={Productos} />
          <Route exact path="/productos.html" component={Productos} />
          <Route exact path="/calidad" component={Calidad} />
          <Route exact path="/calidad.html" component={Calidad} />
          <Route exact path="/contacto" component={Contacto} />
          <Route exact path="/contacto.html" component={Contacto} />
          <Route path="*" component={HomePage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default App;
