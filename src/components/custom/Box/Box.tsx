import React from "react";
import { BoxProps } from "./types";
import "./styles.css";

const Box: React.FC<BoxProps> = ({
  img,
  alt,
  title,
  subText,
  top,
  bottom,
  imgHeight,
  imgWidth,
  ...props
}) => {
  return (
    <div className="box">
      <div className="img_container">
        <img src={img} alt={alt} width={imgWidth} height={imgHeight} />
      </div>
      <div className="content">
        <h4>{title}</h4>
        <p>{subText}</p>
      </div>
    </div>
  );
};

export default Box;
