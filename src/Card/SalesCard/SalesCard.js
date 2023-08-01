import React from "react";
import "./SalesCard.scss";

const SalesCard = ({
  title1,
  title2,
  content1,
  subcontent1,
  content2,
  subcontent2,
}) => {
  return (
    <div className="SalesCard">
      <div className="SalesCard__h1">{title1}</div>
      <div className="SalesCard__h2">{title2}</div>
      <div className="SalesCard__c1">
        <div>{content1}</div>
        <div style={{ color: "green" }}>{subcontent1}</div>
      </div>
      <div className="SalesCard__c1">
        <div>{content2}</div>
        <div style={{ color: "green" }}>{subcontent2} LKR</div>
      </div>
    </div>
  );
};

export default SalesCard;
