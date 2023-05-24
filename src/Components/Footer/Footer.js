import React from "react";
import "./Footer.scss";

export const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer__logo">SHAN PHARMACY</div>
      <div className="Footer__stack">
        <div className="Footer__stack__title">GET TO KNOW US</div>
        <div className="Footer__stack__list">
          <ul>
            <li>ABOUT SHAN PHARMACY</li>
            <li>BLOG</li>
          </ul>
        </div>
      </div>
      <div className="Footer__stack">
        <div className="Footer__stack__title">LET US HELP YOU</div>
        <div className="Footer__stack__list">
          <ul>
            <li>YOUR ACCOUNT</li>
            <li>YOUR ORDERS</li>
            <li>FAQ</li>
          </ul>
        </div>
      </div>
      <div className="Footer__stack">
        <div className="Footer__stack__title">INFORMATION</div>
        <div className="Footer__stack__list">
          <ul>
            <li>TERMS AND CONDITIONS</li>
            <li>CONTACT US</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
