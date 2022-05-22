import React from "react";
import gearsetLogo from "../../../assets/images/logos/gearset_logo.svg";
import "./styles.css";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <img src={gearsetLogo} alt="gearset" />
      <p>Copyright &#169; {year}</p>
    </footer>
  );
};

export default Footer;
