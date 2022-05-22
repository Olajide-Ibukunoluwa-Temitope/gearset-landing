import React from "react";

export type SectionProps = {
  title: string;
  subText?: string;
  btnText?: string;
  btnWidth?: number;
  btnHeight?: number;
  btnTextColor?: string;
  btnBgColor?: string;
  btnFontSize?: string;
  width?: string;
  onClick?: () => void;
  child?: React.ReactNode;
};
