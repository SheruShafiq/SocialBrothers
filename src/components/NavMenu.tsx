import React from "react";
import "../styles/NavMenu.scss";
import { useNavigate } from "react-router-dom";

export default function NavMenu(value: any) {
  const navigate = useNavigate();
  const data = value.value;
  return (
    <div id="navMenuParent">
      <a
        onClick={() => navigate(data.url)}
        className="headerLandingPageChildren"
        id={data.heading}
      >
        {data.heading}
      </a>
      {value.value.active ? <div id="underline"></div> : null}
    </div>
  );
}
