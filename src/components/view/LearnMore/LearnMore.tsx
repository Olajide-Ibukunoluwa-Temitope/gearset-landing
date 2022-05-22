import React from "react";
import Button from "../../custom/Button/Button";
import "./styles.css";

const LearnMore: React.FC = () => {
  const handleClick = () => (window.location.href = "mailto:team@gearset.com");
  return (
    <div className="learn_more_section">
      <div className="title_section">
        <h2>Learn More</h2>
        <p>
          Learn how to deploy faster, ship fewer bugs and release more often.
          Join our weekly 30-minute demo with product experts who will showcase
          key Gearset features.
        </p>
        <Button
          width={246}
          height={56}
          bgColor={"#161D5B"}
          color={"#FFFFFF"}
          fontSize={"20px"}
          btnText="GET IN TOUCH"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default LearnMore;
