import React, { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Menu } from "antd";

const items = [
  {
    label: "All Products",
    key: "1",
  },
  {
    label: "Alphabetical Order",
    key: "2",
  },
  {
    label: "Availability",
    key: "3",
  },
  {
    label: "Price",
    key: "4",
  },
];

const Sort = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(items[0].key);

  const handleMenuClick = (menuItem) => {
    setSelectedMenuItem(menuItem.key);
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      {items.map((item) => (
        <Menu.Item key={item.key}>{item.label}</Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <Button style={{ marginTop: "20px" }}>
        {items.find((item) => item.key === selectedMenuItem)?.label}
        <DownOutlined />
      </Button>
    </Dropdown>
  );
};

export default Sort;
