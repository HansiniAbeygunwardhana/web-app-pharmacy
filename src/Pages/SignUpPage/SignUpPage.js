import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import SubNavbar from "../../Components/SubNavbar/SubNavbar";
import "./HomePage.scss";

export const HomePage = () => {
  return (
    <div className="HomePage">
      <Navbar logoDestination="/" />
      <SubNavbar />
    </div>
  );
};

export default HomePage;
