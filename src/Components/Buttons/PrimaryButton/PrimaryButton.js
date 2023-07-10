import React from "react";
import "./PrimaryButton.scss";

export const PrimaryButton = ({ icon, btnContent, btnFunc, gap, padding }) => {
  const style = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    background: "FFB800",
    borderRadius: "5px",
    border: "none",
    fontFamily: "barlow",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "24px",
    padding: padding || "10px",
    gap: gap || "10px",
    cursor: "pointer",
  };

  return (
    <div className="button" onClick={btnFunc} style={style}>
      <div className="button__icon">{icon}</div>
      <div className="button__text">{btnContent}</div>
    </div>
  );
};

export default PrimaryButton;
