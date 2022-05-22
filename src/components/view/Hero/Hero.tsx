import React from "react";
import Button from "../../custom/Button/Button";
import heroImg from "../../../assets/images/illustrations/hero.svg";
import "./styles.css";

const Hero: React.FC = () => {
  return (
    <>
      <div className="hero_container">
        <div className="hero">
          <div className="hero_content">
            <div className="text_content">
              <h1>The complete Salesforce DevOps solution</h1>
              <p className="subText">
                All the tools you need for unparalleled development success,
                continuous integration, automatic testing & backups.
              </p>
              <Button
                width={233}
                height={56}
                bgColor={"#161D5B"}
                color={"#FFFFFF"}
                fontSize={"20px"}
              />
            </div>
            <div className="image_content">
              <img src={heroImg} alt="hero" />
            </div>
          </div>
        </div>
        {/* <div className="hero2"></div> */}
      </div>
      {/* <div className="hero2"></div> */}
    </>
  );
};

export default Hero;
