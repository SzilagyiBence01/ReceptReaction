import React from "react";
import { NavLink } from "react-router-dom";

// a különöző oldalak közötti váltást elősegítő navigációs menü
export default function NavigationMenu(){
    return (
     <nav>
            <NavLink to="/">Főoldal</NavLink>
            <NavLink to="/favorites">Kedvencek</NavLink>
            <NavLink to="/new">Új recept</NavLink>
            <NavLink to="/about">Az alkalmazásról</NavLink>
            <NavLink to="/speci">Specifikáció</NavLink>
        </nav>
  );
}