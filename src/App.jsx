import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Pokemons from "./components/Pokemons";
import Pokemon from "./components/Pokemon";
import About from "./components/About";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/pokemon/:id">
          <Pokemon />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/pokemons">
          <Pokemons />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
