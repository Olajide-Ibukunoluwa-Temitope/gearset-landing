import React from "react";
import "./styles.css";
import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({
  width,
  height,
  bgColor,
  color,
  fontSize,
}) => {
  return (
    <button className="btn" style={{ width, height, backgroundColor: bgColor }}>
      <p className="btn_text" style={{ fontSize, color }}>
        LEARN MORE
      </p>
    </button>
  );
};

export default Button;
