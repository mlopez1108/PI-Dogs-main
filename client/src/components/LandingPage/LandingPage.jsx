import landingCSS from "./styles.module.css";
import React from "react";
import ilustration from "./ilustration2.svg";
import menu from "./menu.svg";
import cx from "classnames";

const LandingPage = () => {
  return (
    <body className={landingCSS.landing__page}>
      <header className={landingCSS.hero}>
        <nav className={cx(landingCSS.nav, landingCSS.container)}>
          <h2 className={landingCSS.nav__logo}>Dogs App</h2>

          <figure className={landingCSS.nav__menu}>
            <img
              src={menu}
              alt="img not found"
              className={landingCSS.nav__icon}
            />
          </figure>
        </nav>

        <section className={cx(landingCSS.hero__main, landingCSS.container)}>
          <div className={landingCSS.hero__texts}>
            <h1 className={landingCSS.hero__title}>Welcome!</h1>
            <p className={landingCSS.hero__subtitle}>
              Find your favorite dog breed
            </p>
            <a href="/home" className={landingCSS.hero__cta}>
              Home
            </a>
          </div>

          <figure className={landingCSS.hero__picture}>
            <img
              src={ilustration}
              alt="imgNot found"
              className={landingCSS.hero__img}
            />
          </figure>
        </section>
        <div
          style={{ height: "150px", overflow: "hidden" }}
          className={landingCSS.hero__waves}
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
