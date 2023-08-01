import React from "react";
import "./Figure.scss";

const Background = ({ textTitle, textDescrpt, image, figureBtn }) => {
  return (
    // <article className="Article" style={{ backgroundImage: `url(${shp3})` }}>
    <article className="Article" style={{ backgroundImage: `url(${image})` }}>
      <div className="Article__content">
        <div className="Article__content__button">{figureBtn}</div>
        <div className="Article__content__text">
          <div className="Article__content__text__title">{textTitle}</div>
          <div className="Article__content__text__description">
            {textDescrpt}
            {/* Lorem ipsum dolor sit amet consectetur. Eu imperdiet feugiat arcu
            pellentesque porta tristique egestas nunc. */}
          </div>
        </div>
      </div>
    </article>
  );
};

export default Background;
