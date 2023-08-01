import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import OrderDetailTable from "../../Components/Tables/OrderDetailTable";
import PrimaryButton from "../../Components/Buttons/PrimaryButton/PrimaryButton";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import PrescriptionDetailTable from "../../Components/Tables/PrescriptionDetailTable";

export const PrescriptionDetailTablePage = () => {
  const navigate = useNavigate("");
  return (
    <div className="InventoryTablePage">
      <Navbar logoDestination="/admindashboard" />
      <PrescriptionDetailTable />
      {/* </div> */}
    </div>
  );
};

export default PrescriptionDetailTablePage;
