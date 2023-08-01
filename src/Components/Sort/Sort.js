import React, { useState, useEffect } from "react";
import "./Sort.scss";
// import { DownOutlined } from "@ant-design/icons";
// import { Button, Dropdown, Menu } from "antd";

export const Sort = ({ onSortValueChanged }) => {
  return (
    <div className="Sort-area">
      <select className="Sort-area__dropdown" onChange={onSortValueChanged}>
        <option value="all" className="Sort-area__dropdown__option">
          All Products
        </option>
        <option value="available" className="Sort-area__dropdown__option">
          Available
        </option>
        <option value="unavailable" className="Sort-area__dropdown__option">
          Unavailable
        </option>
        <option value="price" className="Sort-area__dropdown__option">
          Price
        </option>
      </select>
    </div>
  );
};

export default Sort;

// const items = [
//   {
//     label: "All Products",
//     key: "1",
//   },
//   {
//     label: "Available",
//     key: "2",
//   },
//   {
//     label: "Unavailable",
//     key: "3",
//   },
//   {
//     label: "Price",
//     key: "4",
//   },
// ];

// const Sort = () => {
//   const [selectedMenuItem, setSelectedMenuItem] = useState(items[0].key);

//   const handleMenuClick = (menuItem) => {
//     setSelectedMenuItem(menuItem.key);
//   };

//   const onSortValueChange = (e) => {
//     console.log(e.target.value);
//   };

//   const menu = (
//     <Menu onClick={handleMenuClick} onChange={onSortValueChange}>
//       {items.map((item) => (
//         <Menu.Item key={item.key}>{item.label}</Menu.Item>
//       ))}
//     </Menu>
//   );

//   return (
//     <Dropdown overlay={menu}>
//       <Button style={{ marginTop: "20px" }}>
//         {items.find((item) => item.key === selectedMenuItem)?.label}
//         <DownOutlined />
//       </Button>
//     </Dropdown>
//   );
// };
