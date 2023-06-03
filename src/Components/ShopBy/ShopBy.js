import React from "react";
import "./ShopBy.scss";

export const SearchBy = () => {
  return (
    <div className="Searchby">
      <div className="Searchby__title">SHOP BY</div>
      <div className="Searchby__title_type">
        CATEGORY
        <ul>
          <li>category 1</li>
          <li>category 2</li>
          <li>category 3</li>
          <li>category 4</li>
          <li>category 5</li>
          <li>category 6</li>
          <li>category 7</li>
        </ul>
      </div>
      <div className="Searchby__title_type">
        PRICE
        <ul>
          <li>LKR 0.00 - LKR 9000.00</li>
          <li>Above LKR 9000.00</li>
        </ul>
      </div>
    </div>
  );
};

export default SearchBy;
