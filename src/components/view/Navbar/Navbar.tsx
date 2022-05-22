import React, { useEffect, useState } from "react";
import Button from "../../custom/Button/Button";
import gearsetLogo from "../../../assets/images/logos/gearset_logo.svg";
import "./styles.css";
import { NavbarProps } from "./types";

const Navbar: React.FC<NavbarProps> = ({ onBtnClick }) => {
  const [shadowMenu, setShadowMenu] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const windowTopPosition = 100;

  useEffect(() => {
    const onScroll = () => {
      let currentPosition = window.document.documentElement.scrollTop;
      if (currentPosition > windowTopPosition) {
        // downscroll code
        setShadowMenu(true);
      } else {
        // upscroll code
        setShadowMenu(false);
      }
      setScrollPosition(currentPosition <= 0 ? 0 : currentPosition);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollPosition]);

  return (
    <nav className={`${shadowMenu ? "nav_shadow" : "nav"}`}>
      <div className="navbar_content">
        <div>
          <img src={gearsetLogo} alt="gearset logo" />
        </div>
        <div>
          <Button
            width={188}
            height={48}
            fontSize={"18px"}
            color={`${shadowMenu ? "#FFFFFF" : "#161D5B"}`}
            bgColor={`${shadowMenu ? "#161D5B" : "#FFFFFF"}`}
            onClick={onBtnClick}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
