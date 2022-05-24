import React from "react";

export type ButtonProps = {
  width: number | undefined;
  height: number | undefined;
  bgColor?: string;
  color?: string;
  fontSize?: string | undefined;
  btnText?: string;
  onClick?: () => void;
};
