import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import OrderDetailTable from "../../Components/Tables/OrderDetailTable";
import PrimaryButton from "../../Components/Buttons/PrimaryButton/PrimaryButton";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

export const OrderDetailTablePage = () => {
  const navigate = useNavigate("");
  return (
    <div className="InventoryTablePage">
      <Navbar logoDestination="/admindashboard" />
      <OrderDetailTable />
      {/* </div> */}
    </div>
  );
};

export default OrderDetailTablePage;
