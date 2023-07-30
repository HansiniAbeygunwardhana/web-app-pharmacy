import React from "react";
import "./DashbordCard.scss";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import dsh1 from "../Assets/dsh1.png";

const DashbordCard = ({ title, content, onClick }) => {
  return (
    <div className="dashboardcard" onClick={onClick}>
      <div className="dashboardcard__container">
        <div className="dashboardcard__title">{title}</div>
        <div className="dashboardcard__content">{content}</div>
      </div>
    </div>
  );
};

export default DashbordCard;
