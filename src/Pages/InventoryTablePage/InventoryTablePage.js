import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import InventoryTable from "../../Components/Tables/InventoryTable";
import "./InventoryTablePage.scss";
import PrimaryButton from "../../Components/Buttons/PrimaryButton/PrimaryButton";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

export const InventoryTablePage = () => {
  const navigate = useNavigate("");
  return (
    <div className="InventoryTablePage">
      <Navbar />
      {/* <div className="InventoryTablePage__conatiner"> */}
      <PrimaryButton
        icon={<AddIcon />}
        btnContent={"ADD NEW"}
        btnFunc={() => {
          navigate("/addinventoryform");
        }}
      />
      <InventoryTable />
      {/* </div> */}
    </div>
  );
};

export default InventoryTablePage;
