import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ProductService from "../../../Services/ProductService";
import CategoryService from "../../../Services/CategoryService";
import "./InventoryForm.scss";

const FormTest = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: null,
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
          id: product.id,
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

  const handleSubmit = async (event) => {
    console.log("hansle");
    event.preventDefault();
    console.log("Form submitted:", formData);
    try {
      if (formData.id) {
        // Existing product, perform update
        await ProductService.updateProduct(formData.id, formData);
      } else {
        // New product, perform create
        await ProductService.createProduct(formData);
        console.log("create success");
      }

      navigate("/inventorytable");
    } catch (error) {
      console.error("Error updating/creating product:");
    }
  };

  const handleChange = (event) => {
    const { name, value, type } = event.target;
    const fieldValue = type === "checkbox" ? event.target.checked : value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: fieldValue,
    }));
  };

  return (
    <div className="InventoryForm_Content">
      <h5>ADD PRODUCT</h5>
      <div className="InventoryForm">
        <form className="formI" onSubmit={handleSubmit}>
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
            <label htmlFor="productImageUrl">Upload</label>
            <input
              id="productImageUrl"
              name="productImageUrl"
              type="file"
              accept="image/*"
              onChange={handleChange}
            />
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

export default FormTest;
