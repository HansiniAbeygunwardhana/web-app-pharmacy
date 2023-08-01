import React from "react";
import "./AddInventoryFormPage.scss";
import Navbar from "../../Components/Navbar/Navbar";
import InventoryForm from "../../Components/Forms/InventoryForm/InventoryForm";
import InventoryFormTest from "../../Components/Forms/InventoryForm/InventoryFormTest";

export const AddInventoryFormPage = () => {
  return (
    <div className="AddInventoryFormPage">
      <Navbar logoDestination="/admindashboard" />
      <InventoryFormTest />
    </div>
  );
};

export default AddInventoryFormPage;
