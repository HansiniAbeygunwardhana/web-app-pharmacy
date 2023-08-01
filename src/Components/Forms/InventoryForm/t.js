import React, { useState, useEffect } from "react";
import "./InventoryForm.scss";
import { useNavigate, useLocation } from "react-router-dom";
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
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    productName: "",
    categoryId: 1,
    productPrice: 1,
    quantity: 1,
    available: false,
    prescriptionMed: false,
    productImageUrl: "",
    productRating: 1,
    expDate: "",
    threshold: 1,
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [categoryNameList, setCategoryNameList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productsResponse, categoriesResponse] = await Promise.all([
          ProductService.getAllProducts(),
          CategoryService.getAllCategories(),
        ]);

        setCategoryNameList(categoriesResponse.data);
        // Process the productsResponse if needed
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (location.state && location.state.productId) {
      const productId = location.state.productId;
      getProductById(productId); // Fetch the product details
    }
  }, [location.state]);

  useEffect(() => {
    console.log("kasiya", formData);
  }, [formData]);

  const getProductById = (productId) => {
    ProductService.getProductById(productId)
      .then((response) => {
        const product = response.data;
        setFormData({
          productName: product.productName,
          categoryId: product.categoryId,
          productPrice: product.productPrice || 1,
          quantity: product.quantity || 1,
          available: product.available || false,
          prescriptionMed: product.prescriptionMed || false,
          productImageUrl: product.productImageUrl || "",
          productRating: product.productRating || 1,
          expDate: product.expDate || "",
          threshold: product.threshold || 1,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onFinish = async (values) => {
    console.log("Received values of form: ", values);
    try {
      // Update or create the product based on formData.id
      if (formData.id) {
        await ProductService.updateProduct(formData.id, {
          ...formData,
          productImageUrl: values.productImageUrl[0] || "",
        });
      } else {
        await ProductService.createProduct({
          ...formData,
          productImageUrl: values.productImageUrl[0] || "",
        });
      }

      navigate("/inventorytable");
    } catch (error) {
      console.error("Error updating/creating product:", error);
    }
  };

  const handleChange = (name, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
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
          <input value={formData.productName} name="productName" type="text" />
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
              value={formData.productName}
              onChange={(e) => handleChange("productName", e.target.value)}
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
              value={formData.categoryId}
              onChange={(value) => handleChange("categoryId", value)}
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
              value={formData.quantity}
              onChange={(value) => handleChange("quantity", value)}
            />
          </Form.Item>
          <Form.Item label="Threshold Value" name="threshold">
            <InputNumber
              min={1}
              value={formData.threshold}
              onChange={(value) => handleChange("threshold", value)}
            />
            <span className="ant-form-text" style={{ marginLeft: 8 }}></span>
          </Form.Item>
          <Form.Item label="Price" name="productPrice">
            <InputNumber
              min={1}
              value={formData.productPrice}
              onChange={(value) => handleChange("productPrice", value)}
            />
            <span className="ant-form-text" style={{ marginLeft: 8 }}>
              LKR
            </span>
          </Form.Item>

          <Form.Item name="available" label="Available" valuePropName="checked">
            <Switch
              checked={formData.available}
              onChange={(checked) => handleChange("available", checked)}
            />
          </Form.Item>
          <Form.Item
            name="prescriptionMed"
            label="Prescription Medicine"
            valuePropName="checked"
          >
            <Switch
              checked={formData.prescriptionMed}
              onChange={(checked) => handleChange("prescriptionMed", checked)}
            />
          </Form.Item>

          <Form.Item name="productRating" label="Rate">
            <div>
              <Rate
                value={formData.productRating}
                onChange={(value) => handleChange("productRating", value)}
              />
            </div>
          </Form.Item>
          <Form.Item label="DatePicker" name="expDate">
            <DatePicker onChange={(value) => handleChange("expDate", value)} />
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
              listtype="picture"
              value={formData.productImageUrl}
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
