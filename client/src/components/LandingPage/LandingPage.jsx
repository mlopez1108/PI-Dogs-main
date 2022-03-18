import "./styles.css";
import React from "react";
//import ilustration from "./ilustration.png";
import ilustration from "./ilustration2.svg";
import menu from "./menu.svg";

const LandingPage = () => {
  return (
    <body>
      <header className="hero">
        <nav className="nav container">
          <h2 className="nav__logo">Dogs App</h2>

          {/*
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#!" className="nav__link">
                Inicio
              </a>
            </li>
            <li className="nav__item">
              <a href="#!" className="nav__link">
                Contact
              </a>
            </li>
          </ul>
          */}

          <figure className="nav__menu">
            <img src={menu} alt="img not found" className="nav__icon" />
          </figure>
        </nav>

        <section className="hero__main container">
          <div className="heroo__texts">
            <h1 className="hero__title">Welcome!</h1>
            <p className="hero__subtitle">Find your favorite dog breed</p>
            <a href="/home" className="hero__cta">
              Home
            </a>
          </div>

          <figure className="hero__picture">
            <img src={ilustration} alt="imgNot found" className="hero__img" />
          </figure>
        </section>
        <div
          style={{ height: "150px", overflow: "hidden" }}
          className="hero__waves"
        >
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            style={{ height: "100%", width: "100%" }}
          >
            <path
              d="M0.00,49.98 C263.82,239.31 327.03,-86.33 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
              style={{ stroke: "none", fill: "#fff" }}
            ></path>
          </svg>
        </div>
      </header>
    </body>
  );
};

export default LandingPage;
