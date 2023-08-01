import React, { useState, useEffect } from "react";
import "./BillDetails.scss";
import { useLocation } from "react-router-dom";
import ProductService from "../../Services/ProductService";

const BillDetails = ({ price, name, quantity, total }) => {
  return (
    <div className="col-6">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody className="tbody">
          <tr>
            <td>{name}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>{total}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BillDetails;
