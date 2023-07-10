import React from "react";
import Carousel from "react-bootstrap/Carousel";
import carousel1 from "../Assets/carousel1.jpg";
import carousel2 from "../Assets/carousel2.jpg";
import carousel3 from "../Assets/carousel3.jpg";
import carousel4 from "../Assets/carousel4.jpg";
import "./Carousel.scss";

const CarouselGallery = () => {
  return (
    <Carousel className="custom-carousel">
      <Carousel.Item>
        <div className="carousel-image-container">
          <img className="carousel-image" src={carousel1} alt="First slide" />
          <div className="carousel-overlay"></div>
        </div>
        <Carousel.Caption className="carousel-caption">
          <h1>Convenient Prescription Refills</h1>
          <p>
            Easily order your medications online and enjoy hassle-free refills
            delivered to your doorstep.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-image-container">
          <img className="carousel-image" src={carousel2} alt="Second slide" />
          <div className="carousel-overlay"></div>
        </div>
        <Carousel.Caption className="carousel-caption">
          <h1>Expert Pharmacy Advice</h1>
          <p>
            Trust our knowledgeable pharmacists to provide personalized guidance
            and answer your health-related questions
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-image-container">
          <img className="carousel-image" src={carousel3} alt="Third slide" />
          <div className="carousel-overlay"></div>
        </div>
        <Carousel.Caption className="carousel-caption">
          <h1>Wide Range of Health Products</h1>
          <p>
            Discover a comprehensive selection of vitamins, supplements, and
            healthcare essentials to support your well-being
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-image-container">
          <img className="carousel-image" src={carousel4} alt="Fourth slide" />
          <div className="carousel-overlay"></div>
        </div>
        <Carousel.Caption className="carousel-caption">
          <h1>Convenient Online Ordering</h1>
          <p>
            Order your prescriptions and healthcare products online from the
            comfort of your home, anytime
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselGallery;
