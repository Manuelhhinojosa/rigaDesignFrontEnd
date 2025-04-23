import React from "react";

// styles
import "./Footer.scss";

// react icons
import { FaRegCopyright } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="footerContainer">
      <FaRegCopyright className="footerIcon" />
      <span>RIGA 2024</span>
    </div>
  );
};
