import React from "react";
import "./styles.css";
import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({ width, height }) => {
  return (
    <button className="btn" style={{ width, height }}>
      LEARN MORE
    </button>
  );
};

export default Button;
