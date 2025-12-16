import React from "react";
import logo from "../assets/logo.png";

// a header-ben visszadjuk a logo.png fájlunkat az assets mapából
export default function Header(){
    return(
        <div id="headerheader">
            <img src={logo} alt="Logo" id="HeaderLogo" />
        </div>
    )
}