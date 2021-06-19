import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Empresa from "./pages/Empresa";
import Productos from "./pages/Productos";
import Calidad from "./pages/Calidad";
import Contacto from "./pages/Contacto";

import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/empresa" component={Empresa} />
        <Route exact path="/productos" component={Productos} />
        <Route exact path="/calidad" component={Calidad} />
        <Route exact path="/contacto" component={Contacto} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
