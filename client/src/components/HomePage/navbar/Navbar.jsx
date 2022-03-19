import NavbarCSS from "./styles.module.css";
import React, { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("nav__menu");
  const [toggleIcon, setToggleIcon] = useState("nav__togler");

  const navToggle = () => {
    active === "nav__menu"
      ? setActive("nav__menu nav__active")
      : setActive("nav__menu");

    // TogglerIcon:
    toggleIcon === "nav_toggler"
      ? setToggleIcon("nav__toggler toggle")
      : setToggleIcon("nav__toggler");
  };

  return (
    <div className={NavbarCSS.navbar}>
      <nav className={NavbarCSS.nav}>
        <a href="#!" className={NavbarCSS.nav__brand}>
          Dogs
        </a>
        <ul className={active}>
          <li className={NavbarCSS.nav__item}>
            <a href="#!" className={NavbarCSS.nav__link}>
              Search bar
            </a>
          </li>
          <li className={NavbarCSS.nav__item}>
            <a href="#!" className={NavbarCSS.nav__link}>
              Create dog
            </a>
          </li>
        </ul>
        <div onClick={navToggle} className={toggleIcon}>
          <div className={NavbarCSS.line1}></div>
          <div className={NavbarCSS.line2}></div>
          <div className={NavbarCSS.line3}></div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
