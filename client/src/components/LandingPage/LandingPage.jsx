import React from "react";
import { Link } from "react-router-dom";
import ilustration from "./ilustration.png";

const LandingPage = () => {
  return (
    <React.Fragment>
      <body>
        <header className="hero">
          <nav className="nav container">
            <h2 className="nav__logo">Dogs App</h2>
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#"></a>
              </li>
              <li className="nav__item">
                <a href="#">Contact</a>
              </li>
            </ul>
            <figure className="nav__menu">
              <img
                src={ilustration}
                alt="img not found"
                className="nav__icon"
              />
            </figure>
          </nav>
          <section className="hero__main container">
            <div className="heroo__texts">
              <h1 className="hero__title">Hello! My name is Mateo</h1>
              <p className="hero__subtitle">Bien loco, bien loco, bien loco</p>
              <a href="#" className="hero__cta">
                Join Satan
              </a>
            </div>
          </section>
        </header>
      </body>
    </React.Fragment>
  );
};

export default LandingPage;

{
  /* <div>
      <h1>LANDING</h1>
      <img alt="Img not found" />
      <Link to="/home">
        <button>HOME</button>
      </Link>
    </div> */
}
