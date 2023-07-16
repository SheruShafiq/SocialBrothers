import React from "react";
import "../styles/NavMenu.scss";
import { useNavigate } from "react-router-dom";

type Props = {
  value: {
    heading: string;
    active: boolean;
    url: string;
  };
};

export default function NavMenu(value: Props) {
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
