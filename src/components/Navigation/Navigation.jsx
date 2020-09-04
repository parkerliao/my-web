import React, { useState } from "react";
import { Divider } from "@material-ui/core";
import "./_Navigation.scss";

const NavLinks = [
  {
    title: "Home",
    path: "/home",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Portfolio",
    path: "/portfolio",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

const Navigation = () => {
  const [Active, setAcitve] = useState(false);

  return (
    <div className="nav">
      <nav className="nav-container">
        <span className="logo">P a k e r</span>
        <div className={`link-container ${Active ? "active" : ""}`}>
          <ul>
            {NavLinks.map((navlink, index) => (
              <li key={index}>
                <a href={navlink.path}>{navlink.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <i
          className="fa fa-bars menu-icon"
          id="menu-icon"
          aria-hidden="true"
          onClick={() => {
            setAcitve(!Active);
          }}
        ></i>
      </nav>
      <Divider />
    </div>
  );
};

export default Navigation;
