import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import ProductPage from "../Pages/ProductPage/ProductPage";
import ProfilePage from "../Pages/ProfilePage/ProfilePage";
import CartPage from "../Pages/CartPage/CartPage";
import PrescriptionUploadPage from "../Pages/PrescriptionUploadPage/PrescriptionUploadPage";
import SearchResultsPage from "../Pages/SearchresultsPage/SearchResultsPage";
import FormSample from "../Pages/Form";

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
        <Route path="/form" element={<FormSample />} />
      </Routes>
    </Router>
  );
}

export default App;
