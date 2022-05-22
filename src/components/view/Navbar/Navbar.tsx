import React from "react";
import Button from "../../custom/Button/Button";
import gearsetLogo from "../../../assets/images/logos/gearset_logo.svg";
import "./styles.css";

const Navbar: React.FC = () => {
  return (
    <nav className="nav">
      <div className="navbar-content">
        <div>
          <img src={gearsetLogo} alt="gearset logo" />
        </div>
        <div>
          <Button width={188} height={48} fontSize={"18px"} color={"#161D5B"} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
