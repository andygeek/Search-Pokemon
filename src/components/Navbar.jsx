import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  let title = "Pokemon React";

  return (
    <div className="navbar navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <h1 className="text-white">{title}</h1>
        <button className="navbar-toggler" data-toggle="collapse" data-target="#myList">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="myList">
            <div className="navbar-nav">
                <NavLink to="/" exact className="nav-link" activeClassName="active">Home</NavLink>
                <NavLink to="/pokemons" className="nav-link" activeClassName="active">Pokemons</NavLink>
                <NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
