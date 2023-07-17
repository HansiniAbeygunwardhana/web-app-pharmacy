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
    productPrice: 1,
    quantity: 1,
    available: false,
    prescriptionMed: false,
    file: null,
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
    const { file, ...otherFormData } = formData; // Exclude the file from form data

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
          className="formI"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <div className="form-group">
            <label htmlFor="productName">Product Name</label>
            <input
              id="productName"
              name="productName"
              type="text"
              value={formData.productName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="categoryId">Category</label>
            <select
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
          </div>
          <div className="form-group">
            <label htmlFor="quantity">Quantity</label>
            <input
              id="quantity"
              name="quantity"
              type="number"
              min={1}
              value={formData.quantity}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="threshold">Threshold Value</label>
            <input
              id="threshold"
              name="threshold"
              type="number"
              min={1}
              value={formData.threshold}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="productPrice">Price</label>
            <input
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
          </div>
          <div className="form-group">
            <label htmlFor="available">Available</label>
            <input
              id="available"
              name="available"
              type="checkbox"
              checked={formData.available}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="prescriptionMed">Prescription Medicine</label>
            <input
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
