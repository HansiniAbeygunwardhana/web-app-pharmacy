import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import InventoryTable from "../../Components/Tables/InventoryTable";
import "./InventoryTablePage.scss";

export const InventoryTablePage = () => {
  return (
    <div className="InventoryTablePage">
      <Navbar />
      <InventoryTable />
    </div>
  );
};

export default InventoryTablePage;
