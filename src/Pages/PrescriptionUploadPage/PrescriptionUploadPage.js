import React from "react";
import PrescriptForm from "../../Components/Forms/PrecriptForm/PrescriptForm";
import Navbar from "../../Components/Navbar/Navbar";
import SubNavbar from "../../Components/SubNavbar/SubNavbar";
import Footer from "../../Components/Footer/Footer";

const PrescriptionUploadPage = () => {
  return (
    <div>
      <Navbar />
      <SubNavbar />
      <PrescriptForm />
      <Footer />
    </div>
  );
};

export default PrescriptionUploadPage;
