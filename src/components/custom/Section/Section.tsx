import React from "react";
import Button from "../Button/Button";
import { SectionProps } from "./types";
import "./styles.css";

const Section: React.FC<SectionProps> = (props) => {
  return (
    <div className="section_container">
      <div className="title_section">
        <h2>{props.title}</h2>
        <p>{props.subText}</p>
        {props.btnText && (
          <Button
            width={props?.btnWidth}
            height={props?.btnHeight}
            bgColor={props?.btnBgColor}
            color={props?.btnTextColor}
            fontSize={props?.btnFontSize}
          />
        )}
      </div>
      <div className="child_container" style={{width: props.width}}>{props.child}</div>
    </div>
  );
};

export default Section;
