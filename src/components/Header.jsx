import React from "react";
import "../styles/Header.scss";
import NavMenu from "./NavMenu";

function Header({ logo, navMenuItems }) {
  return (
    <div className="Header" id="headerLandingPage">
      <img
        src={logo} // Access logo directly
        alt="Logo"
        className="headerLandingPageLogo"
        id="logoHeaderLandingPage"
      />
      <div id="HeaderLandingPageNavMenu">
        {navMenuItems.map(
          (
            value,
            index // Use navMenuItems instead of menuItems
          ) => (
            <NavMenu key={index} value={value} />
          )
        )}
      </div>
    </div>
  );
}

export default Header;
