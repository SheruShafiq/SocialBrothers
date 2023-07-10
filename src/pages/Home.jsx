import React from "react";
import Header from "../components/Header";
import "../styles/Home.scss";
import Logo from "../assets/logo.svg";
export default function Home() {
  const navMenuItems = [
    { heading: "Home", url: "http://www.home.com" },
    { heading: "Blog", url: "http://www.blog.com" },
  ];
  return (
    <div id="Parent">
      <Header logo={Logo} navMenuItems={navMenuItems} />
    </div>
  );
}
