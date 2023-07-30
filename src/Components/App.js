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
import EmployeeDashboardPage from "../../src/Pages/Dashboard/EmployeeDashboardPage/EmployeeDashboardPage";
import AdminDashboardPage from "../../src/Pages/Dashboard/AdminDashboardPage/AdminDashboardPage";
import CustomerDashboardPage from "../../src/Pages/Dashboard/CustomerDashboardPage/CustomerDashboardPage";
import Checkout from "../Pages/CheckoutPage/Checkout";
import LoginPage from "../Pages/LoginPage/LoginPage";
import AuthGuard from "../Auth/AuthGuard";
import ProductDetailContainer from "../Components/ProductDetailContainer/ProductDetailContainer";
import PlaceOrderFormPage from "../Pages/PlaceOrderFormPage/PlaceOrderFormPage";
import OrderDetailTablePage from "../Pages/OrderDetailsTablePage/OrderDetailsTablePage";
import { AuthInterceptor } from "../Auth/AuthInterceptor";

function App() {
  return (
    <Router>
      <AuthInterceptor />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/frm" element={<FormTest />} />
        <Route path="/" element={<AuthGuard />}>
          <Route path="/product" element={<ProductPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route
            path="prescriptionupload"
            element={<PrescriptionUploadPage />}
          />
          <Route path="/search-results" element={<SearchResultsPage />} />
          <Route path="/addinventoryform" element={<AddInventoryFormPage />} />
          <Route path="/inventorytable" element={<InventoryTablePage />} />
          <Route path="/admindashboard" element={<AdminDashboardPage />} />
          <Route path="/productdetail" element={<ProductDetailContainer />} />
          <Route
            path="/employeedashboard"
            element={<EmployeeDashboardPage />}
          />
          <Route
            path="/customerdashboard"
            element={<CustomerDashboardPage />}
          />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/allorderdetails" element={<OrderDetailTablePage />} />
          <Route
            path="/placeorderform/:productId"
            element={<PlaceOrderFormPage />}
          />
        </Route>
        {/* <Route path="/s" element={<Success />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
