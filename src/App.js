import React from "react";
import Navbar from "./componentes/Navbar";
import "./App.css";
import Home from "./componentes/paginas/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Favoritos from "./componentes/paginas/favoritos";
import Cursos from "./componentes/paginas/Cursos";
import Cadastro from "./componentes/paginas/cadastro";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/favoritos" component={Favoritos} />
          <Route path="/cursos" component={Cursos} />
          <Route path="/cadastro" component={Cadastro} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
