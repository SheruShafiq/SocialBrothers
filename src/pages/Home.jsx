import React from "react";
import Header from "../components/Header";
import "../styles/Home.scss";
import Logo from "../assets/logo.svg";
export default function Home() {
  return (
    <div id="Parent">
      <Header logo={Logo} />
    </div>
  );
}
