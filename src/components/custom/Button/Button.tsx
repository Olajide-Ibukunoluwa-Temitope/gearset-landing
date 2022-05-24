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
      style={{ width, height, backgroundColor: bgColor, fontSize, color }}
      onClick={() => onClick?.()}
    >
      <p className="btn_text" style={{ fontSize, color }}>
        {btnText ? btnText : "LEARN MORE"}
      </p>
    </button>
  );
};

export default Button;
