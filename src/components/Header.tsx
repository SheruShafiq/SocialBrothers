import React, { FunctionComponent, SVGAttributes } from "react";
import "../styles/Header.scss";
import NavMenu from "./NavMenu";
import { NavMenuItems } from "../pages/Home";

interface HeaderProps {
  logo: FunctionComponent<SVGAttributes<SVGElement>>;
  navMenuItems: NavMenuItems[];
  title?: string;
}

function Header({ logo, navMenuItems, title }: HeaderProps) {
  const logoPath = logo.toString(); // Convert logo to string
  return (
    <div className="Header" id="headerLandingPage">
      <img
        src={logoPath} // Access logo directly
        alt="Logo"
        className="headerLandingPageLogo"
        id="logoHeaderLandingPage"
      />
      <div id="headerTitleContainer">
        <h1 id="headerTitle">{title}</h1>
      </div>
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
