import "./App.scss";
import React from "react";
import Logo from "./assets/logo.svg";
function App() {
  return (
    <div id="Parent">
      <div className="Header" id="headerLandingPage">
        <img
          src={Logo}
          alt="Logo"
          className="headerLandingPageLogo"
          id="logoHeaderLandingPage"
        />
        <div id="HeaderLandingPageNavMenu">
          <a href="http://" className="headerLandingPageChildren" id="Home">
            Home
          </a>
          <a href="http://" className="headerLandingPageChildren" id="Blog">
            Blog
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
