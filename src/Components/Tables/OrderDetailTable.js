import React, { useEffect, useState } from "react";
import { Table, Tag } from "antd";
import { useNavigate } from "react-router-dom";
import OrderService from "../../Services/OrderService";

const OrderDetailTable = () => {
  const columns = [
    {
      title: "Order Id",
      dataIndex: "orderId",
      key: "orderId",
      //   render: (text) => <a>{text}</a>,
    },
    {
      title: "Order Amount",
      dataIndex: "orderAmount",
      key: "orderAmount",
    },
    {
      title: "Purchased Product Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Purchased Product",
      dataIndex: "productName",
      key: "productName",
    },
    {
      title: "User Name",
      dataIndex: "userName",
      key: "userName",
    },
    {
      title: "Status",
      dataIndex: "orderStatus",
      key: "orderStatus",
    },
  ];

  const [orderDetails, setOrderDetails] = useState([]);

  useEffect(() => {
    // Fetch all order details with status "All" (or any other desired status)
    OrderService.getAllOrderDetails("PLACED" || "DELIVERED")
      .then((response) => {
        setOrderDetails(response.data);
      })
      .catch((error) => {
        console.error("Error fetching order details:", error);
      });
  }, []);

  // Map the orderDetails data to create an array with orderId and orderAmount
  const orderData = orderDetails.map((order) => ({
    orderId: order.orderId,
    orderAmount: order.orderAmount,
    id: order.product.id,
    productName: order.product.productName,
    userName: order.user.userName,
    orderStatus: order.orderStatus,
  }));

  return (
    <div>
      <Table columns={columns} dataSource={orderData} />
    </div>
  );
};

export default OrderDetailTable;
