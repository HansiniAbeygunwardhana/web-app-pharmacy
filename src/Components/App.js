import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import ProductPage from "../Pages/ProductPage/ProductPage";
import ProfilePage from "../Pages/ProfilePage/ProfilePage";
import CartPage from "../Pages/CartPage/CartPage";
import PrescriptionUploadPage from "../Pages/PrescriptionUploadPage/PrescriptionUploadPage";
import SearchResultsPage from "../Pages/SearchresultsPage/SearchResultsPage";
import AddInventoryFormPage from "../Pages/AddInventoryFormPage/AddInventoryFormPage";
import Success from "../Components/Alerts/Success/Success";
import InventoryTablePage from "../Pages/InventoryTablePage/InventoryTablePage";
import FormTest from "./Forms/FormTest";
import ProductDetailContainer from "../Components/ProductDetailContainer/ProductDetailContainer";
import EmployeeDashboardPage from "../../src/Pages/Dashboard/EmployeeDashboardPage/EmployeeDashboardPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="prescriptionupload" element={<PrescriptionUploadPage />} />
        <Route path="/search-results" element={<SearchResultsPage />} />
        <Route path="/addinventoryform" element={<AddInventoryFormPage />} />
        <Route path="inventorytable" element={<InventoryTablePage />} />
        <Route path="frm" element={<FormTest />} />
        <Route path="productdetail" element={<ProductDetailContainer />} />
        <Route path="employeedashboard" element={<EmployeeDashboardPage />} />
        {/* <Route path="/s" element={<Success />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
