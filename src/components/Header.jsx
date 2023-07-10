import React from "react";
import "../styles/Header.scss";
import NavMenu from "./NavMenu";

function Header(Logo) {
  const navMenuItems = [
    { heading: "Home", url: "http://www.home.com" },
    { heading: "Blog", url: "http://www.blog.com" },
  ];

  return (
    <div className="Header" id="headerLandingPage">
      <img
        src={Logo.logo}
        alt="Logo"
        className="headerLandingPageLogo"
        id="logoHeaderLandingPage"
      />
      <div id="HeaderLandingPageNavMenu">
        {navMenuItems.map((value, index) => (
          <NavMenu key={index} value={value} />
        ))}
      </div>
    </div>
  );
}

export default Header;
