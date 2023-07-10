import React from "react";
import line1 from "../Assets/line1.png";
import line2 from "../Assets/line2.png";
import line3 from "../Assets/line3.png";
import line4 from "../Assets/line4.png";
import "./NoticeBar.scss";

const NoticeBar = () => {
  return (
    <div className="NoticeBar">
      <div className="NoticeBar__component">
        <img className="NoticeBar__component__img" src={line1} alt="icon1" />
        <div className="NoticeBar__component__text">Health is wealth</div>
      </div>
      <div className="NoticeBar__component">
        <img className="NoticeBar__component__img" src={line2} alt="icon1" />
        <div className="NoticeBar__component__text">Your wellness matters</div>
      </div>
      <div className="NoticeBar__component">
        <img className="NoticeBar__component__img" src={line3} alt="icon1" />
        <div className="NoticeBar__component__text">
          Take charge of your health
        </div>
      </div>
      <div className="NoticeBar__component">
        <img className="NoticeBar__component__img" src={line4} alt="icon1" />
        <div className="NoticeBar__component__text">
          Pharmacy: Caring for you
        </div>
      </div>
    </div>
  );
};

export default NoticeBar;
