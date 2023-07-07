import React from "react";
import { Radio, Space, Table, Tag } from "antd";
import { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Popconfirm } from "antd";
import { useNavigate } from "react-router-dom";
import ProductService from "../../Services/ProductService";
import AddInventoryFormPage from "../../Pages/AddInventoryFormPage/AddInventoryFormPage";

const InventoryTable = () => {
  const [productItemList, setProductItemList] = useState([]);
  const [categoryItemList, setCategoryItemList] = useState([]);
  const [tableKey, setTableKey] = useState(Date.now());
  const navigate = useNavigate();

  const columns = [
    {
      title: "Product",
      dataIndex: "productName",
      key: "productName",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Price",
      dataIndex: "productPrice",
      key: "productPrice",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "address",
    },
    {
      title: "Threshold",
      dataIndex: "threshold",
      key: "threshold",
    },
    {
      title: "Availability",
      dataIndex: "available",
      key: "available",
      render: (available) => (
        <span>
          <Tag color={available ? "green" : "red"}>
            {available ? "Available" : "Not Available"}
          </Tag>
        </span>
      ),
    },
    {
      title: "Category",
      dataIndex: "categoryId",
      key: "categoryId",
      render: (categoryId) => {
        const category = getCategoryName(categoryId);
        return <span>{category}</span>;
      },
    },
    {
      title: "Expiration Date",
      dataIndex: "expDate",
      key: "expDate",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Popconfirm
            title="Are you sure you want to delete this product?"
            onConfirm={() => deleteProduct(record.key)}
            okText="Yes"
            cancelText="No"
          >
            <DeleteIcon />
          </Popconfirm>
          <EditIcon
            onClick={() => {
              navigate("/addinventoryform", { state: { product: record } });
            }}
          />
        </Space>
      ),
    },
  ];
  const getCategoryName = (categoryId) => {
    const category = categoryItemList.find(
      (category) => category.id === categoryId
    );
    return category ? category.categoryName : "";
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    ProductService.getAllProducts()
      .then((response) => {
        const sortedProducts = response.data.reverse();
        setProductItemList(sortedProducts);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteProduct = (productId) => {
    ProductService.deleteProduct(productId)
      .then((response) => {
        getAllProducts();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Table
        columns={columns}
        dataSource={productItemList.map((item) => ({ ...item, key: item.id }))}
        key={tableKey} // Update the table key
      />
    </div>
  );
};
export default InventoryTable;
