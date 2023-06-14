import React from "react";
import { useState, useEffect } from "react";
import "./InventoryForm.scss";
import Success from "../../Alerts/Success/Success";
import Submit from "../../Buttons/Submit";

export const InventoryForm = () => {
  const [formData, setFormData] = useState({
    productName: "",
    categoryId: 1,
    productPrice: 0.0,
    quantity: 0.0,
    available: true,
    prescriptionMed: true,
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [categoryNameList, setCategoryNameList] = useState([]);

  const handleChange = (event) => {
    console.log(event.target.value);
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setShowSuccess(true);
    setFormData(
      "productName:",
      formData.productName,
      "categoryId:",
      formData.categoryId,
      "productPrice:",
      formData.productPrice,
      "quantity:",
      formData.quantity,
      "available:",
      formData.available,
      "prescriptionMed:",
      formData.prescriptionMed
    );
    const result = await fetch("http://localhost:8080/product/add", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(formData),
    });
    const resultInJson = await result.json();

    console.log(resultInJson);
  };

  useEffect(() => {
    const fetchData = async () => {
      const resultCategory = await fetch("http://localhost:8080/category/list");
      const jsonResultCategory = await resultCategory.json();
      setCategoryNameList(jsonResultCategory);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="InventoryForm-header">
        <div className="InventoryForm-header__title">ADD NEW PRODUCT</div>
        <select>
          <option>ADD NEW PRODUCT</option>
          <option>ADD NEW CATEGORY</option>
        </select>
      </div>
      <div className="InventoryForm-Container">
        <form onSubmit={handleSubmit} className="InventoryForm">
          <label className="InventoryForm__ProductName">
            {" "}
            Product Name:
            <input
              type="text"
              id="productName"
              name="productName"
              value={formData.productName}
              onChange={handleChange}
            />
          </label>
          <div className="InventoryForm__Subcontainer">
            <label className="InventoryForm__ProductQuantity">
              {" "}
              Quantity:
              <input
                type="number"
                id="quantity"
                name="quantity"
                onChange={handleChange}
                value={formData.quantity}
              />
            </label>

            <label className="InventoryForm__ProductPrice">
              {" "}
              Product Price:
              <input
                type="number"
                id="productPrice"
                name="productPrice"
                onChange={handleChange}
                value={formData.productPrice}
              />
            </label>
          </div>
          <div className="InventoryForm__Subcontainer">
            <label className="InventoryForm__ProductCategory">
              Select Product Category:
              <select id="category" name="categoryId" onChange={handleChange}>
                {categoryNameList.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.categoryName}
                  </option>
                ))}
              </select>
            </label>
            <label className="InventoryForm__ProductAvailability">
              Availability:
              <select
                id="availability"
                name="availability"
                onChange={handleChange}
              >
                <option value={true}>available</option>
                <option value={false}>unavailable</option>
              </select>
            </label>
            <label className="InventoryForm__PrescriptionMedication">
              Prescription Medication:
              <select
                id="prescriptionMed"
                name="prescriptionMed"
                onChange={handleChange}
              >
                <option value={true}>yes</option>
                <option value={false}>no</option>
              </select>
            </label>
          </div>

          <button type="submit" className="InventoryForm__Submit-Button">
            <Submit />
          </button>
        </form>
        {showSuccess && <Success />}
      </div>
    </>
  );
};

export default InventoryForm;
