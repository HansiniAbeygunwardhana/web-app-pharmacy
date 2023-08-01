import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ProductService from "../../../Services/ProductService";
import CategoryService from "../../../Services/CategoryService";
import "./InventoryForm.scss";

const InventoryForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    productName: "",
    categoryId: 1,
    productPrice: 0,
    quantity: 0,
    available: false,
    prescriptionMed: false,
    file: null,
    productRating: 1,
    expDate: "",
    threshold: 0,
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [categoryNameList, setCategoryNameList] = useState([]);
  const [invalidFields, setInvalidFields] = useState({});

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
    console.log(formData);
  }, [formData]);

  const getProductById = async (productId) => {
    try {
      const response = await ProductService.getProductById(productId);
      const product = response.data;
      setFormData({
        productName: product.productName,
        categoryId: product.categoryId,
        productPrice: product.productPrice || 1,
        quantity: product.quantity || 1,
        available: product.available || false,
        prescriptionMed: product.prescriptionMed || false,
        file: null,
        productRating: product.productRating || 1,
        expDate: product.expDate || "",
        threshold: product.threshold || 1,
      });
      setSelectedFileName(""); // Clear the selected file name
    } catch (error) {
      console.log(error);
    }
  };
  const [selectedFileName, setSelectedFileName] = useState("");

  // Rest of the code...

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFormData((prevFormData) => ({
      ...prevFormData,
      file: file,
    }));
    setSelectedFileName(file ? file.name : "");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setInvalidFields({}); // Reset the invalidFields state before validation
    const { file, ...otherFormData } = formData;

    // Perform additional validations here
    const errors = {};

    if (formData.productName.trim() === "") {
      // Check if product name is empty
      errors.productName = "Product name is required.";
    } else if (!/^[\w\s]{3,50}$/.test(formData.productName)) {
      // Check for character limit and prevent special characters
      errors.productName =
        "Product name must be between 3 and 50 characters and contain only letters, numbers, and spaces.";
    }

    if (!formData.categoryId) {
      // Check if category is selected
      errors.categoryId = "Please select a category.";
    }

    if (formData.productPrice <= 0) {
      // Check if product price is valid
      errors.productPrice = "Product price must be greater than zero.";
    }

    if (formData.threshold <= 0) {
      // Check if threshold value is valid
      errors.threshold = "Threshold value must be greater than zero.";
    }

    if (formData.quantity === 0 && formData.available) {
      // Check if quantity is 0 and availability is true
      errors.available =
        "Quantity must be greater than zero for availability to be true.";
    }

    if (Object.keys(errors).length > 0) {
      // If there are errors, set the invalidFields state to display the error messages
      setInvalidFields(errors);
      return;
    }

    try {
      const productData = new FormData();
      productData.append("file", file); // Append the file to form data
      Object.entries(otherFormData).forEach(([key, value]) => {
        productData.append(key, value); // Append other form fields to form data
      });

      // Send the form data to the server for upload
      if (formData.id) {
        await ProductService.updateProduct(formData.id, productData);
      } else {
        await ProductService.createProduct(productData);
      }

      navigate("/inventorytable");
    } catch (error) {
      console.error("Error updating/creating product:", error);
    }
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const fieldValue = type === "checkbox" ? checked : value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: fieldValue,
    }));
  };

  return (
    <div className="InventoryForm_Content">
      <h5>ADD PRODUCT</h5>
      <div className="InventoryForm">
        <form
          noValidate
          className="formI"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <div className="form-group">
            <label htmlFor="productName">Product Name</label>
            <input
              className="form-element"
              style={{
                borderColor: invalidFields.productName ? "red" : "#757575",
              }}
              id="productName"
              name="productName"
              type="text"
              value={formData.productName}
              onChange={handleChange}
              required
              pattern="[A-Za-z0-9 ]+"
              title="Product name must be between 3 and 50 characters and contain only letters, numbers, and spaces."
            />
            {invalidFields.productName && (
              <div style={{ color: "red" }}>{invalidFields.productName}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="categoryId">Category</label>
            <select
              style={{
                borderColor: invalidFields.categoryId ? "red" : "#757575",
              }}
              className="form-element"
              id="categoryId"
              name="categoryId"
              value={formData.categoryId}
              onChange={handleChange}
              required
            >
              {categoryNameList.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.categoryName}
                </option>
              ))}
            </select>
            {invalidFields.categoryId && (
              <div style={{ color: "red" }}>{invalidFields.categoryId}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="quantity">Quantity</label>
            <input
              style={{
                borderColor: invalidFields.quantity ? "red" : "#757575",
              }}
              className="form-element"
              id="quantity"
              name="quantity"
              type="number"
              min={1}
              value={formData.quantity}
              onChange={handleChange}
              required
            />
            {invalidFields.quantity && (
              <div style={{ color: "red" }}>{invalidFields.quantity}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="threshold">Threshold Value</label>
            <input
              style={{
                borderColor: invalidFields.threshold ? "red" : "#757575",
              }}
              className="form-element"
              id="threshold"
              name="threshold"
              type="number"
              min={1}
              value={formData.threshold}
              onChange={handleChange}
              required
            />
            {invalidFields.threshold && (
              <div style={{ color: "red" }}>{invalidFields.threshold}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="productPrice">Price</label>
            <input
              style={{
                borderColor: invalidFields.productPrice ? "red" : "#757575",
              }}
              className="form-element"
              id="productPrice"
              name="productPrice"
              type="number"
              min={1}
              value={formData.productPrice}
              onChange={handleChange}
              required
            />
            <span className="ant-form-text" style={{ marginLeft: 8 }}>
              LKR
            </span>
            {invalidFields.productPrice && (
              <div style={{ color: "red" }}>{invalidFields.productPrice}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="available">Available</label>
            <input
              style={{
                borderColor: invalidFields.available ? "red" : "#757575",
              }}
              className="form-element"
              id="available"
              name="available"
              type="checkbox"
              checked={formData.available}
              onChange={handleChange}
            />
            {invalidFields.available && (
              <div style={{ color: "red" }}>{invalidFields.available}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="prescriptionMed">Prescription Medicine</label>
            <input
              style={{
                borderColor: "#757575",
              }}
              className="form-element"
              id="prescriptionMed"
              name="prescriptionMed"
              type="checkbox"
              checked={formData.prescriptionMed}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="productRating">Rate</label>
            <input
              style={{
                borderColor: "#757575",
              }}
              className="form-element"
              id="productRating"
              name="productRating"
              type="number"
              min={1}
              max={5}
              step={0.1}
              value={formData.productRating}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="expDate">Expiration Date</label>
            <input
              style={{
                borderColor: "#757575",
              }}
              className="form-element"
              id="expDate"
              name="expDate"
              type="date"
              value={formData.expDate}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="file">Upload</label>
            <input
              style={{
                borderColor: "#757575",
              }}
              className="form-element"
              id="file"
              name="file"
              type="file"
              onChange={handleFileChange}
            />
            {selectedFileName && <span>{selectedFileName}</span>}
          </div>
          <div className="form-group">
            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InventoryForm;
