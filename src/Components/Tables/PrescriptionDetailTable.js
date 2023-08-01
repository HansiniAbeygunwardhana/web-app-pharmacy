import React, { useEffect, useState } from "react";
import { Table, Tag } from "antd";
import { useNavigate } from "react-router-dom";
import PrescriptionService from "../../Services/PrescriptionService";

const PrescriptionDetailTable = () => {
  const columns = [
    {
      title: "Prescription Id",
      dataIndex: "prescriptionId",
      key: "prescriptionId",
      //   render: (text) => <a>{text}</a>,
    },
    {
      title: "User Name",
      dataIndex: "userName",
      key: "userName",
    },
    {
      title: "Frequency",
      dataIndex: "frequency",
      key: "frequency",
    },
    {
      title: "Fulfilment",
      dataIndex: "fulfilment",
      key: "fulfilment",
    },
    {
      title: "Substitute",
      dataIndex: "substitute",
      key: "substitute",
    },
    {
      title: "Prescription",
      dataIndex: "prescriptionImageUrl",
      key: "prescriptionImageUrl",
      render: (url) => (
        <a href={url} target="_blank" rel="noopener noreferrer">
          Prescription Link
        </a>
      ),
    },
  ];

  const [prescriptionDetails, setPrescriptionDetails] = useState([]);

  useEffect(() => {
    // Fetch all order details with status "All" (or any other desired status)
    PrescriptionService.getAllPrescriptionDetails()
      .then((response) => {
        setPrescriptionDetails(response.data);
      })
      .catch((error) => {
        console.error("Error fetching order details:", error);
      });
  }, []);

  // Map the orderDetails data to create an array with orderId and orderAmount
  const prescriptionData = prescriptionDetails.map((prescription) => ({
    prescriptionId: prescription.prescriptionId,
    userName: prescription.user?.userName || "N/A",
    frequency: prescription.frequency,
    fulfilment: prescription.fulfilment,
    substitute: prescription.substitute,
    prescriptionImageUrl: prescription.prescriptionImageUrl,
    // orderAmount: prescription.orderAmount,
    // id: prescription.product.id,
    // productName: prescription.product.productName,
  }));

  return (
    <div>
      <Table columns={columns} dataSource={prescriptionData} />
    </div>
  );
};

export default PrescriptionDetailTable;
