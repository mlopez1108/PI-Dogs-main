import React from "react";
import AboutPageCSS from "./styles.module.css";
import me from "./1.jpg";
// import cx from "classnames";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className={AboutPageCSS.principal}>
      <div className={AboutPageCSS.app}>
        <div className={AboutPageCSS.details}>
          <div className={AboutPageCSS.big_img}>
            <img src={me} alt="Img not found" />
          </div>
          <div className={AboutPageCSS.box}>
            <div className={AboutPageCSS.row}>
              <h2>ABOUT ME</h2>
              <p>
                Hi! My name is Mateo Lopez. I am a Full Stack Web Developer and
                a student of the Degrees in Mathematics and Physics, currently
                looking for my first job in the IT world!
              </p>
              <p>
                I am going to finish Henry's bootcamp in the month of May,
                adding +800 hours of academic experience in programming with
                real projects, both individual and group.
              </p>
            </div>
            <div className={AboutPageCSS.skills}>
              <h3>💻 Tech Skills 💻</h3>
              <p>✅ JavaScript, HTML5, CSS3</p>
              <p>✅ React JS & Redux</p>
              <p>✅ Node JS & Express</p>
              <p>✅ PostgreSQL & Sequelize</p>
              <p>✅ Git & GitHub</p>
            </div>
            <div className={AboutPageCSS.contact}>
              <h4>👉 Contact</h4>
              <p>✉ mathewlop70@gmail.com</p>
              <p>📞 +54 11 3305 2952</p>
            </div>
            <Link to="/home">
              <button className={AboutPageCSS.home}>Home</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
