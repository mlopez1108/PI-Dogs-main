import NavbarCSS from "./styles.module.css";
import React, { useState } from "react";
import ReorderIcon from "@material-ui/icons/Reorder";
// import SearchIcon from "@material-ui/icons/Search";
import dogIcon from "./dogIcon.png";
import SearchBar from "../searchBar/SearchBar";

const Navbar = ({ setCurrentPage }) => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className={NavbarCSS.Navbar}>
      <div className={NavbarCSS.leftSide}>
        <div className={NavbarCSS.links} id={showLinks ? "hidden" : ""}>
          <img className={NavbarCSS.icon} src={dogIcon} alt="Img not found" />
          <a href="/dog">Create</a>
          <a href="/about">AboutMe</a>
          <img className={NavbarCSS.icon} src={dogIcon} alt="Img not found" />
        </div>
        <button
          className={NavbarCSS.button}
          onClick={() => setShowLinks(!showLinks)}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className={NavbarCSS.rightSide}>
        <SearchBar setCurrentPage={setCurrentPage} />
      </div>
    </div>
  );
};

export default Navbar;
