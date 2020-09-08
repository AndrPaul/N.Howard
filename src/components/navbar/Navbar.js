import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { NavItems } from "./NavItems";
import {OpenIcon, CloseIcon} from "./NavIcons";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 900;
  const styleMobile = { fontWeight: 600, color: '#333333' };
  const styleDesktop = { fontWeight: 300 };

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);


  return (
    <nav className={click ? "navbar active" : "navbar"}>
      <div className="nav-container">
        <Link to="/" onClick={closeMobileMenu} className={click ? "navbar-logo active" : "navbar-logo"}>
          N.Howard
        </Link>
        <div className={click ? "menu-icon active" : "menu-icon"} onClick={handleClick}>
          {click ? <CloseIcon /> : <OpenIcon />}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          {NavItems.map((item, i) => {
            return (
              <li key={i} className="nav-item">
                <NavLink
                  key={i}
                  onClick={closeMobileMenu}
                  activeStyle={width < breakpoint ? styleMobile : styleDesktop}
                  activeClassName="active-nav-link"
                  className={item.cName}
                  exact
                  to={item.url}
                >
                  {item.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
