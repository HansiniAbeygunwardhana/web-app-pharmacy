import React from "react";
import "./AddInventoryFormPage.scss";
import Navbar from "../../Components/Navbar/Navbar";
import InventoryForm from "../../Components/Forms/InventoryForm/InventoryForm";

export const AddInventoryFormPage = () => {
  return (
    <div className="AddInventoryFormPage">
      <Navbar logoDestination="/admindashboard" />
      <InventoryForm />
    </div>
  );
};

export default AddInventoryFormPage;
