import NavbarCSS from "./styles.module.css";
import React, { useState } from "react";
import ReorderIcon from "@material-ui/icons/Reorder";
import SearchIcon from "@material-ui/icons/Search";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className={NavbarCSS.Navbar}>
      <div className={NavbarCSS.leftSide}>
        <div className={NavbarCSS.links} id={showLinks ? "hidden" : ""}>
          <a href="/dog">Create</a>
          <a href="#!">Feedback</a>
          <a href="#!">About us</a>
          <a href="#!">Contact</a>
        </div>
        <button
          className={NavbarCSS.button}
          onClick={() => setShowLinks(!showLinks)}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className={NavbarCSS.rightSide}>
        <input type="text" placeholder="Search..." />
        <button className={NavbarCSS.button}>
          <SearchIcon />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
