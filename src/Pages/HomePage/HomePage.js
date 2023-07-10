import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import SubNavbar from "../../Components/SubNavbar/SubNavbar";
import CarouselGallery from "../../Components/Carousel/Carousel";
import HeaderFigure from "../../Components/Figures/Figure";
import "./HomePage.scss";
import shp3 from "../../Components/Assets/shp3.jpg";
import shp4 from "../../Components/Assets/shp4.jpg";
import PrimaryButton from "../../Components/Buttons/PrimaryButton/PrimaryButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NoticeBar from "../../Components/NoticeBar/NoticeBar";
import { useNavigate } from "react-router-dom";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import Footer from "../../Components/Footer/Footer";

export const HomePage = () => {
  let navigate = useNavigate();
  const handleUploadClick = () => {
    navigate("/prescriptionupload");
  };

  const handleShopNowClick = () => {
    navigate("/product");
  };
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
    padding: "10px",
    gap: "10px",
  };

  return (
    <div className="HomePage">
      <Navbar />
      <SubNavbar />
      <CarouselGallery />
      <NoticeBar />
      <div className="HomePage__Figure">
        <HeaderFigure
          figureBtn={
            <PrimaryButton
              icon={<ShoppingCartIcon />}
              btnContent={"SHOP NOW"}
              style={style}
              btnFunc={handleShopNowClick}
            />
          }
          image={shp3}
          textTitle={"Explore a World of Health and Wellness"}
          textDescrpt={
            "Discover an extensive range of high-quality healthcare products, medications, and wellness essentials. Shop now and take control of your well-being with our trusted pharmacy services. We offer convenient online ordering, expert advice, and a wide selection of products to support your journey to a healthier life."
          }
        />
        <HeaderFigure
          figureBtn={
            <PrimaryButton
              icon={<TextSnippetIcon />}
              btnContent={"UPLOAD YOUR PRESCRIPTION"}
              gap="20px"
              padding="20px"
              btnFunc={handleUploadClick}
            />
          }
          image={shp4}
          textTitle={"Seamless Prescription Upload"}
          textDescrpt={
            "Experience the convenience of our prescription upload facility. Easily submit your prescriptions online, saving you time and effort. Our secure and user-friendly platform ensures a seamless process, allowing our expert pharmacists to review and fulfill your medication needs promptly. Take advantage of this hassle-free way to manage your prescriptions."
          }
        />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
