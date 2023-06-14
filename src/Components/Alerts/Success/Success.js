import { Alert, Space } from "antd";
import React from "react";

export const Success = () => {
  <Space
    direction="vertical"
    style={{
      width: "100%",
    }}
  ></Space>;
  return (
    <Alert message="Inventory Added Successfully" type="success" showIcon />
  );
};

export default Success;
