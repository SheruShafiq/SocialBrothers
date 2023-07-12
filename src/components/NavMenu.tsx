import React from "react";
import "../styles/NavMenu.scss";
export default function NavMenu(value) {
  const data = value.value;
  return (
    <a href={data.url} className="headerLandingPageChildren" id={data.heading}>
      {data.heading}
    </a>
  );
}