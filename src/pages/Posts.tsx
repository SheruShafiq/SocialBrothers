import React from "react";
import "../styles/Posts.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Form from "../components/Form";
import { NavMenuItems } from "./Home";
import Logo from "../assets/logo.svg";

function Posts() {
  const navMenuItems: NavMenuItems[] = [
    { heading: "Home", url: "http://www.home.com" },
    { heading: "Blog", url: "http://www.blog.com" },
  ];
  return (
    <>
      <Header logo={Logo} navMenuItems={navMenuItems} />
      <div id="content">
        <Posts />
      </div>
      <Footer />
    </>
  );
}

export default Posts;
