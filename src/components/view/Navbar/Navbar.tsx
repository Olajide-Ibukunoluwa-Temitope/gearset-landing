import React from "react";
import Button from "../../custom/Button/Button";
import "./styles.css";

const Navbar: React.FC = () => {
  return (
    <nav className="nav">
      <div className="navbar-content">
        <div>
          <p>GEARSET</p>
        </div>
        <div>
          <Button width={188} height={48} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
