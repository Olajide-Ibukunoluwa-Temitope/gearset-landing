import React from "react";
import "./styles.css";
import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({
  width,
  height,
  bgColor,
  color,
  fontSize,
  btnText,
  onClick,
}) => {
  return (
    <button
      className="btn"
      style={{ width, height, backgroundColor: bgColor, fontSize, color }} // come back to replace in-line style with better alternative
      onClick={() => onClick?.()}
    >
      <p className="btn_text">{btnText ? btnText : "LEARN MORE"}</p>
    </button>
  );
};

export default Button;
