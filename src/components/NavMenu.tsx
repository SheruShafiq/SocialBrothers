import React from "react";
import "../styles/NavMenu.scss";
import { useNavigate } from "react-router-dom";

export default function NavMenu(value) {
  const navigate = useNavigate();
  const data = value.value;
  return (
    <>
      <a
        onClick={() => navigate(data.url)}
        className="headerLandingPageChildren"
        id={data.heading}
      >
        {data.heading}
      </a>

      <div id="underline"></div>
    </>
  );
}
