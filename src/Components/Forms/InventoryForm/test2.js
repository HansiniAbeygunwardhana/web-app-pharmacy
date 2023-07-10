import React, { useState, useEffect } from "react";
import "./InventoryForm.scss";
import { useNavigate, useParams } from "react-router-dom";
import Success from "../../Alerts/Success/Success";
import { InboxOutlined, UploadOutlined } from "@ant-design/icons";
import ProductService from "../../../Services/ProductService";
import CategoryService from "../../../Services/CategoryService";

import {
  Input,
  Button,
  DatePicker,
  Form,
  InputNumber,
  Rate,
  Select,
  Space,
  Switch,
  Upload,
} from "antd";

const { Option } = Select;
const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};

const normFile = (e) => {
  console.log("Upload event:", e);
  if (Array.isArray(e)) {
    return e;
  }
  const fileList = e && e.fileList;
  return fileList ? fileList.map((file) => file.name) : [];
};

const InventoryForm = () => {
  const [productName, setProductName] = useState("");
  const [categoryId, setCategoryId] = useState();
  const [productPrice, setProductPrice] = useState(0.0);
  const [quantity, setQuantity] = useState(0.0);
  const [available, setAvailable] = useState(false);
  const [prescriptionMed, setPrescriptionMed] = useState(false);
  const [productImageUrl, setProductImageUrl] = useState("");
  const [expDate, setExpDate] = useState("");
  const [productRating, setProductRating] = useState(1);
  const [threshold, setThreshold] = useState(0.0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [categoryNameList, setCategoryNameList] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    ProductService.getProductById(id)
      .then((response) => {
        setProductName(response.data.productName);
        setCategoryId(response.data.categoryId);
        setProductPrice(response.data.productPrice);
        setQuantity(response.data.quantity);
        setAvailable(response.data.available);
        setPrescriptionMed(response.data.prescriptionMed);
        setProductImageUrl(response.data.productImageUrl);
        setExpDate(response.data.expDate);
        setThreshold(response.data.threshold);
      })
      .catch((error) => {
        console.log(error);
      });

    CategoryService.getAllCategories().then((response) => {
      setCategoryNameList(response.data);
    });
  }, []);

  const onFinish = async () => {
    const product = {
      productName,
      categoryId,
      productPrice,
      quantity,
      available,
      prescriptionMed,
      productImageUrl,
      expDate,
      threshold,
    };

    if (id) {
      // Update existing product
      ProductService.updateProduct(id, product)
        .then((response) => {
          navigate("/inventorytable");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      ProductService.createProduct(product)
        .then((response) => {
          console.log(response.data);

          navigate("/inventorytable");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="InventoryForm_Content">
      <h5>ADD PRODUCT</h5>
      <div className="InventoryForm">
        <Form
          className="formI"
          name="validate_other"
          {...formItemLayout}
          onFinish={onFinish}
          initialValues={{
            "input-number": 3,
            rate: 3.5,
          }}
          style={{
            width: 800,
          }}
        >
          <Form.Item
            label="Product Name"
            name="productName"
            rules={[
              {
                required: true,
                message: "Please input the product name!",
              },
            ]}
          >
            <Input
              value={productName}
              onChange={(e) => setProductName("productName", e.target.value)}
            />
          </Form.Item>
          <Form.Item
            name="categoryId"
            label="Category"
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please select the category!",
              },
            ]}
          >
            <Select
              id="category"
              name="categoryId"
              placeholder="Please select the category"
              value={categoryId}
              onChange={(value) => setCategoryId(value)}
            >
              {categoryNameList.map((item) => (
                <Option key={item.id} value={item.id}>
                  {item.categoryName}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="Quantity" name="quantity">
            <InputNumber
              min={1}
              value={quantity}
              onChange={(value) => setQuantity(value)}
            />
          </Form.Item>
          <Form.Item label="Threshold Value" name="threshold">
            <InputNumber
              min={1}
              value={threshold}
              onChange={(value) => setThreshold(value)}
            />
            <span className="ant-form-text" style={{ marginLeft: 8 }}></span>
          </Form.Item>
          <Form.Item label="Price" name="productPrice">
            <InputNumber
              min={1}
              value={productPrice}
              onChange={(value) => setProductPrice(value)}
            />
            <span className="ant-form-text" style={{ marginLeft: 8 }}>
              LKR
            </span>
          </Form.Item>
          <Form.Item name="available" label="Available" valuePropName="checked">
            <Switch
              checked={available}
              onChange={(checked) => setAvailable("available", checked)}
            />
          </Form.Item>
          <Form.Item
            name="prescriptionMed"
            label="Prescription Medicine"
            valuePropName="checked"
          >
            <Switch
              checked={prescriptionMed}
              onChange={(checked) =>
                setPrescriptionMed("prescriptionMed", checked)
              }
            />
          </Form.Item>
          <Form.Item name="productRating" label="Rate">
            <div>
              <Rate
                value={productRating}
                onChange={(value) => setProductRating(value)}
              />
            </div>
          </Form.Item>
          <Form.Item label="DatePicker" name="expDate">
            <DatePicker
              value={expDate}
              onChange={(value) => setExpDate("expDate", value)}
            />
          </Form.Item>
          <Form.Item
            name="productImageUrl"
            label="Upload"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            extra="Upload a picture of the product to display"
          >
            <Upload
              name="logo"
              action="/upload.do"
              listType="picture"
              value={productImageUrl}
              getValueFromEvent={normFile}
            >
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          </Form.Item>
          <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
            <Space>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              <Button htmlType="reset">Reset</Button>
            </Space>
          </Form.Item>
        </Form>
        {showSuccess && <Success />}
      </div>
    </div>
  );
};

export default InventoryForm;
